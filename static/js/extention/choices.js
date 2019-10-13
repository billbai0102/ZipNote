// $('.btn-search').click(function() {
//     let className = document.getElementById('search').value;
//     let lang = document.getElementById('language-choice');
//     lang = lang.options[lang.selectedIndex].text;
//     console.log(lang);
//     // $.ajax({
//     //     type: 'GET',
//     //     url: '/' + className + '/' + lang
//     // }).done(function(res) {
//     //     console.log('Worked!');
//     // });
//     $.post( '/' + className + '/' + lang, {
//         //javascript_data: data
//     });
// });

// function googleTranslateElementInit() {
//     new google.translate.TranslateElement(
//         { pageLanguage: 'en' },
//         'google_translate_element'
//     );
// }

// function switchLang() {
//     let language = document.getElementById('language-choice');
//     language = language.options[language.selectedIndex].value;
//     console.log(language.lang);
//     console.log(language);
//     if (language === 'Afrikanns') {
//         console.log('yes');
//         console.log(document.getElementsByClassName('goog-te-combo')[0]);
//         document.getElementsByClassName('goog-te-combo')[0].value = 'af';
//     }
//     window.location.location = '/index.html.ru';
// }

// document.getElementsByClassName('skiptranslate')[0].innerHTML = '';
// let l = document.getElementByClassName('goog-te-combo')[0];
// console.log(l);
// document.getElementByClassName('goog-te-combo')[0].options[0].value =
//     'Language';
