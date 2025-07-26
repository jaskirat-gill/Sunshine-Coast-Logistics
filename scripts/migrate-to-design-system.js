#!/usr/bin/env node

/**
 * Migration script to convert hardcoded colors to design system usage
 * 
 * This script helps identify and suggest replacements for hardcoded colors
 * in the codebase. It doesn't automatically replace them, but provides
 * suggestions for manual migration.
 */

const fs = require('fs')
const path = require('path')
const glob = require('glob')

// Color mappings from hardcoded to design system
const colorMappings = {
  // Yellow colors
  'from-yellow-400 to-yellow-600': 'classes.gradient.primary',
  'from-yellow-500 to-yellow-700': 'classes.gradient.primaryHover',
  'from-yellow-200 to-yellow-300': 'classes.gradient.primary (light variant)',
  'from-yellow-600 to-yellow-800': 'classes.gradient.primary (dark variant)',
  'bg-yellow-400': 'classes.background.accent',
  'bg-yellow-500': 'classes.text.accent',
  'bg-yellow-600': 'classes.text.accent',
  'text-yellow-400': 'classes.text.accent',
  'text-yellow-500': 'classes.text.accent',
  'text-yellow-600': 'classes.text.accent',
  'border-yellow-400': 'classes.border.accent',
  'border-yellow-500': 'classes.border.accent',
  'border-yellow-600': 'classes.border.accent',
  
  // Zinc colors
  'text-zinc-900': 'classes.text.primary',
  'text-zinc-800': 'classes.text.primary',
  'text-zinc-700': 'classes.text.secondary',
  'text-zinc-600': 'classes.text.secondary',
  'text-zinc-500': 'classes.text.muted',
  'text-zinc-400': 'classes.text.muted',
  'text-zinc-300': 'classes.text.secondary',
  'text-zinc-200': 'classes.text.secondary',
  'text-zinc-100': 'classes.text.primary',
  'text-zinc-50': 'classes.text.primary',
  
  'bg-zinc-900': 'classes.background.primary',
  'bg-zinc-800': 'classes.background.secondary',
  'bg-zinc-700': 'classes.background.muted',
  'bg-zinc-600': 'classes.background.muted',
  'bg-zinc-500': 'classes.background.muted',
  'bg-zinc-400': 'classes.background.muted',
  'bg-zinc-300': 'classes.background.muted',
  'bg-zinc-200': 'classes.background.muted',
  'bg-zinc-100': 'classes.background.muted',
  'bg-zinc-50': 'classes.background.secondary',
  
  'border-zinc-900': 'classes.border.primary',
  'border-zinc-800': 'classes.border.primary',
  'border-zinc-700': 'classes.border.primary',
  'border-zinc-600': 'classes.border.secondary',
  'border-zinc-500': 'classes.border.secondary',
  'border-zinc-400': 'classes.border.secondary',
  'border-zinc-300': 'classes.border.secondary',
  'border-zinc-200': 'classes.border.primary',
  'border-zinc-100': 'classes.border.primary',
  'border-zinc-50': 'classes.border.primary',
  
  // White/Black
  'text-white': 'classes.text.primary (in dark mode)',
  'text-black': 'classes.text.primary (in light mode)',
  'bg-white': 'classes.background.primary',
  'bg-black': 'classes.background.primary (in dark mode)',
  'border-white': 'classes.border.primary',
  'border-black': 'classes.border.primary',
  
  // Gradients
  'bg-gradient-to-r from-zinc-900 to-zinc-700': 'classes.gradient.textPrimary',
  'bg-gradient-to-r from-white to-yellow-400': 'classes.gradient.textPrimary (dark mode)',
  'bg-gradient-to-b from-white to-zinc-100': 'classes.gradient.backgroundLight',
  'bg-gradient-to-b from-zinc-900 to-black': 'classes.gradient.backgroundDark',
  'bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent': 'classes.gradient.borderAccent',
  
  // Component patterns
  'bg-white dark:bg-zinc-800/50 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-700/50': 'classes.components.card.container',
  'text-xl font-bold text-zinc-900 dark:text-white mb-3': 'classes.components.card.header',
  'text-zinc-600 dark:text-zinc-300': 'classes.components.card.content',
  
  'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 rounded-full': 'classes.components.button.primary',
  'bg-white/5 hover:bg-yellow-400/10 border-white/30 text-yellow-400': 'classes.components.button.secondary',
  'border border-white/30 text-white hover:bg-white/10': 'classes.components.button.outline',
  
  'w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center': 'classes.components.icon.primary',
  'w-10 h-10 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-lg flex items-center justify-center': 'classes.components.icon.secondary',
  'w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center': 'classes.components.icon.small',
  
  'relative py-16 md:py-24': 'classes.components.section.container',
  'absolute inset-0 bg-gradient-to-b from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-black -z-10': 'classes.components.section.background',
  'absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent': 'classes.components.section.border',
  'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-yellow-400/5 blur-3xl -z-10': 'classes.components.section.glow',
  
  'bg-white/80 dark:bg-zinc-900/80 backdrop-blur-lg shadow-md': 'classes.components.nav.container',
  'text-zinc-800 hover:text-yellow-600 dark:text-zinc-200 dark:hover:text-yellow-400': 'classes.components.nav.link',
  'text-yellow-600 dark:text-yellow-400': 'classes.components.nav.linkActive',
  
  'absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-black/30 z-10': 'classes.components.hero.overlay',
  'text-5xl md:text-7xl font-bold text-white mb-6 leading-tight': 'classes.components.hero.title',
  'bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent': 'classes.components.hero.titleAccent',
  'text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto': 'classes.components.hero.subtitle',
}

// Patterns to search for
const searchPatterns = [
  // Yellow colors
  /from-yellow-\d+ to-yellow-\d+/g,
  /bg-yellow-\d+/g,
  /text-yellow-\d+/g,
  /border-yellow-\d+/g,
  
  // Zinc colors
  /text-zinc-\d+/g,
  /bg-zinc-\d+/g,
  /border-zinc-\d+/g,
  
  // White/Black
  /text-white/g,
  /text-black/g,
  /bg-white/g,
  /bg-black/g,
  /border-white/g,
  /border-black/g,
  
  // Gradients
  /bg-gradient-to-[rltb] from-[a-zA-Z0-9-]+ to-[a-zA-Z0-9-]+/g,
  /bg-gradient-to-[rltb] from-[a-zA-Z0-9-]+ via-[a-zA-Z0-9-]+ to-[a-zA-Z0-9-]+/g,
  
  // Complex patterns
  /bg-white dark:bg-zinc-800\/50 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-700\/50/g,
  /bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 rounded-full/g,
  /w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center/g,
]

function findFiles() {
  const patterns = [
    'components/**/*.tsx',
    'app/**/*.tsx',
    'lib/**/*.ts',
    'lib/**/*.tsx'
  ]
  
  let files = []
  patterns.forEach(pattern => {
    const matches = glob.sync(pattern, { ignore: ['node_modules/**', '.next/**'] })
    files = files.concat(matches)
  })
  
  return files
}

function analyzeFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8')
  const issues = []
  
  // Check for hardcoded colors
  searchPatterns.forEach(pattern => {
    const matches = content.match(pattern)
    if (matches) {
      matches.forEach(match => {
        const suggestion = colorMappings[match] || 'Check design system for appropriate class'
        issues.push({
          type: 'hardcoded-color',
          match,
          suggestion,
          line: findLineNumber(content, match)
        })
      })
    }
  })
  
  // Check for missing design system imports
  if (content.includes('className=') && !content.includes('useDesignSystem') && !content.includes('getGradientClasses')) {
    issues.push({
      type: 'missing-import',
      match: 'No design system import found',
      suggestion: 'Import useDesignSystem from @/lib/hooks/useDesignSystem',
      line: 'N/A'
    })
  }
  
  return issues
}

function findLineNumber(content, searchText) {
  const lines = content.split('\n')
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes(searchText)) {
      return i + 1
    }
  }
  return 'Unknown'
}

function generateReport() {
  const files = findFiles()
  const report = {
    totalFiles: files.length,
    filesWithIssues: 0,
    totalIssues: 0,
    issues: []
  }
  
  files.forEach(file => {
    const fileIssues = analyzeFile(file)
    if (fileIssues.length > 0) {
      report.filesWithIssues++
      report.totalIssues += fileIssues.length
      report.issues.push({
        file,
        issues: fileIssues
      })
    }
  })
  
  return report
}

function printReport(report) {
  console.log('\n🎨 Design System Migration Report\n')
  console.log(`📊 Summary:`)
  console.log(`   Total files scanned: ${report.totalFiles}`)
  console.log(`   Files with issues: ${report.filesWithIssues}`)
  console.log(`   Total issues found: ${report.totalIssues}`)
  
  if (report.issues.length > 0) {
    console.log('\n📝 Issues Found:\n')
    
    report.issues.forEach(({ file, issues }) => {
      console.log(`📁 ${file}`)
      issues.forEach(issue => {
        console.log(`   Line ${issue.line}: ${issue.match}`)
        console.log(`   💡 Suggestion: ${issue.suggestion}`)
        console.log('')
      })
    })
    
    console.log('\n🚀 Migration Steps:')
    console.log('1. Import useDesignSystem in components that need styling')
    console.log('2. Replace hardcoded colors with design system classes')
    console.log('3. Use the hook: const { classes } = useDesignSystem()')
    console.log('4. Replace patterns like "text-zinc-900" with "classes.text.primary"')
    console.log('5. Test components to ensure styling remains consistent')
  } else {
    console.log('\n✅ No issues found! All files are already using the design system.')
  }
}

// Main execution
if (require.main === module) {
  const report = generateReport()
  printReport(report)
}

module.exports = {
  findFiles,
  analyzeFile,
  generateReport,
  colorMappings
} 