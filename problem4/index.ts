const sumToNMethodA = (n: number): number => {
	let sum = 0;
	for (let i = 1; i <= n; i++) {
		sum += i;
	}
	return sum;
};

const sumToNMethodB = (n: number): number => {
	if (n <= 0) return 0;
	return sumToNMethodB(n - 1) + n;
};

const sumToNMethodC = (n: number): number => {
	return (n * (n + 1)) / 2;
};

const main = () => {
	console.log(sumToNMethodA(10));
	console.log(sumToNMethodB(10));
	console.log(sumToNMethodC(10));
};

main();