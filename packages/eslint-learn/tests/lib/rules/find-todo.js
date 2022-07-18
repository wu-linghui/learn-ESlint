module.exports = {
  create(context) {
    const { options } = context

    function findComments(comment) {
      for (const option of options) {
        if (comment.value.toLowerCase().includes(option)) {
          context.report({
            node: comment,
            message: `🙏🙏🙏求求了修复这个${option}它不能被使用!`,
          })
        }
      }
    }

    return {
      Program() {
        const sourceCode = context.getSourceCode()
        const comments = sourceCode.getAllComments()
        for (const comment of comments) {
          findComments(comment)
        }
      },
    }
  },
}
