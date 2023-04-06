console.log(process.argv)

const [LABELS, BRANCH_NAME, ...args] = process.argv.slice(2);

console.log('Labels: ', LABELS, 'BRANCH NAME: ', BRANCH_NAME)
console.log(LABELS[0])

const labelsArray = LABELS.split(', ');

labelsArray.filter((name) => {
    name.startsWith(BRANCH_NAME)
})

if (args.length > 0) {
    console.log('This script only requires 2 arguments.');
    process.exit(1);
};

if(labelsArray.length > 1){
    console.log(`There can only be 1 branch that begins with ${BRANCH_NAME}`);
    process.exit(1);
} else if(labelsArray.length < 1){
    console.log(`No labels found that begin with ${BRANCH_NAME}`);
    process.exit(1);
} else {
    console.log(labelsArray[0])
    process.stdout.write(`::set-output name=branch::${labelsArray[0]}`)
}