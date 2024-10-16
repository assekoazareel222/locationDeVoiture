document.getElementById('mainImage').addEventListener('click', function() {
    document.getElementById('otherImages').classList.toggle('hidden');
});


( function( domain, translations ) {
	var localeData = translations.locale_data[ domain ] || translations.locale_data.messages;
	localeData[""].domain = domain;
	wp.i18n.setLocaleData( localeData, domain );
} )( "contact-form-7", {"translation-revision-date":"2024-06-28 09:28:26+0000","generator":"GlotPress\/4.0.1","domain":"messages","locale_data":{"messages":{"":{"domain":"messages","plural-forms":"nplurals=2; plural=n > 1;","lang":"fr"},"Error:":["Erreur\u00a0:"]}},"comment":{"reference":"includes\/js\/index.js"}} );
