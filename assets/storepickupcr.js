document.addEventListener('crPickupActivated', function (e) {
	if (!jqCR('#pickup-store-search').length) {
		jqCR('#store-search').prepend('<input type="text" name="pickup-store-search" id="pickup-store-search" onkeyup="storePickup.storeFilter()" placeholder="Chercher..." class="valid" aria-invalid="false">')            
	}
	
})