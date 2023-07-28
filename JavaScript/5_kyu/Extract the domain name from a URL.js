// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// мое решение работает только с правильным URL
function domainName(url) {
	let result = new URL(url);
	let text = String(result.host);
	return text.split('.')[0];
}

let value = domainName('httG://oleg.test.com');

console.log(value);


// Второе решение
function domainName(url) {
  url = url.replace("https://", "");
  url = url.replace("http://", "");
  url = url.replace("www.", "");
  return url.split(".")[0];

}
