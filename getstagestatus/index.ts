import tl = require('azure-pipelines-task-lib/task');

async function run() {
    const variables = tl.getVariables()
        .filter(x => !x.secret)
    
    try {
         const inputString: string | undefined = tl.getInput('samplestring', true);
         if (inputString == 'bad') {
             tl.setResult(tl.TaskResult.Failed, 'Bad input was given');
             return;
         }
         console.log('Hello', inputString);
         console.log(JSON.stringify(variables))
     }
     catch (err:any) {
         tl.setResult(tl.TaskResult.Failed, err.message);
     }
 }

 run();