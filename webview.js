module.exports = Franz => {
	const getMessages = function getMessages() {
		let directElements = document.querySelectorAll('.unreadcount');
		let direct = 0;
		for (let i = 0; i < directElements.length; i += 1) {
			n = parseInt(directElements[i].innerHTML);
			direct += (isNaN(n) ? 0 : n);
		}
		Franz.setBadge(direct);
	};
	Franz.loop(getMessages);
};
