module.exports = {
  meta: {
    fixable: 'code',
    schema: [],
    type: 'suggestion',
  },
  create(context) {
    return {
      CallExpression(node) {
        if (node.callee.name === 'deprecatedSayHello') {
          context.report({
            node,
            message:
                '该函数已过时,请更换为SayHello',
            fix(fixer) {
              return fixer.replaceText(node.callee, 'SayHello')
            },
          })
        }
      },
    }
  },
}
