console.log(process.argv)

const [LABELS, BRANCH_NAME] = process.argv.slice(2);

LABELS.filter((name) => {
    name.startsWith(BRANCH_NAME)
})

if(LABELS.length > 1){
    console.log(`There can only be 1 branch that begins with ${BRANCH_NAME}`);
    process.exit(1);
} else if(LABELS.length < 1){
    console.log(`No labels found that begin with ${BRANCH_NAME}`);
    process.exit(1);
} else {
    process.stdout.write(`::set-output name=branch::${LABELS[0]}`)
}