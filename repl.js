const repl = require('repl');

let r = repl.start({
    ignoreUndefined: true,
    replMode: repl.REPL_MODE_STRICT
})

// enables strict mode in the repl
// r.context.lodash = require('lodash); include modules