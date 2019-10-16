export default (...fs) => x => fs.reduceRight((x, f) => f(x), x);
