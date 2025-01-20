const footer = document.querySelector('footer');

const revealFooter = function(entries){
    const [entry] = entries;
	if(!entry.isIntersecting){ 
		footer.classList.add("hidden"); 
		}
	else{
		footer.classList.remove("hidden");
		}
}

const footerObserver = new IntersectionObserver(revealFooter,
     {root: null, threshold: 0, rootMargin: "-4px"});


footerObserver.observe(footer);
