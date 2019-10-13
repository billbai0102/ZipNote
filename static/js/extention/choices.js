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

function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        { pageLanguage: 'en' },
        'google_translate_element'
    );
    console.log('hi');
}

$(document).ready(function() {
    setTimeout(function() {
        document.getElementsByClassName('goog-te-combo')[0].name =
            'language-choice';
        let l = document.getElementsByClassName('goog-te-combo')[0];

        document.getElementsByClassName('goog-te-combo')[0].options[1].text =
            'hi'; //TODO add all language changes here

        console.log(document.getElementsByClassName('goog-te-combo')[0]);
    }, 500);
});

{
    /* <select
                            id="language-choice"
                            name="language-choice"
                            data-placeholder="Choose a Language..."
                        >
                            <option value="Afrikanns">Afrikanns</option>
                            <option value="Albanian">Shqiptar</option>
                            <option value="Amharic">ኣማርኛ</option>
                            <option value="Arabic">العربية</option>
                            <option value="Armenian">Հայերէն</option>
                            <option value="Azerbaijani"
                                >آذربايجانجا ديلي</option
                            >
                            <option value="Basque">Euskara</option>
                            <option value="Belarusian">Беларуская мова</option>
                            <option value="Bengali">বাংলা</option>
                            <option value="Bosnian">بۉسانسقى</option>
                            <option value="Bulgarian">български</option>
                            <option value="Catalan">català</option>
                            <option value="Cebuano">Sinugboanon</option>
                            <option value="Chinese (Simplified)">中文</option>
                            <option value="Chinese (Traditional)"
                                >中國傳統
                            </option>
                            <option value="Corsican">Corsu</option>
                            <option value="Croation">Hrvatski</option>
                            <option value="Czech">čeština</option>
                            <option value="Danish">dansk</option>
                            <option value="Dutch">Nederlands</option>
                            <option value="English" selected>English</option>
                            <option value="Esperanto">Esperanto</option>
                            <option value="Estonian">Eesti keel</option>
                            <option value="Finnish">Suomi</option>
                            <option value="French">Français</option>
                            <option value="Frisian">Noordfreesk</option>
                            <option value="Galician">Galego</option>
                            <option value="Georgian">ქართული</option>
                            <option value="German">Deutsch</option>
                            <option value="Greek">ελληνικά</option>
                            <option value="Gujarati">ગુજરાતી</option>
                            <option value="Haitian Creole"
                                >Kreyòl ayisyen</option
                            >
                            <option value="Hausa">حَوْسَ</option>
                            <option value="Hawaiian">ʻōlelo Hawaiʻi</option>
                            <option value="Hebrew">עברית</option>
                            <option value="Hindi">हिन्दी</option>
                            <option value="Hmong">Hmong</option>
                            <option value="Hungarian">Magyar</option>
                            <option value="Icelandic">Íslenska</option>
                            <option value="Igbo">Igbo</option>
                            <option value="Indonesian">Bahasa Indonesia</option>
                            <option value="Irish">Gaeilge</option>
                            <option value="Italian">Italiano</option>
                            <option value="Japanese">日本語</option>
                            <option value="Javanese">Basa Jawa</option>
                            <option value="Kannada">ಕನ್ನಡ</option>
                            <option value="Kazakh">Қазақ тілі</option>
                            <option value="Khmer">ភាសាខ្មែរ</option>
                            <option value="Korean">한국어</option>
                            <option value="Kurdish">Kurdí</option>
                            <option value="Kyrgyz">Kyrgyz</option>
                            <option value="Lao">ພາສາລາວ</option>
                            <option value="Latin">Lingua Latina</option>
                            <option value="Latvian">Latviešu valoda</option>
                            <option value="Lithuanian">Lietuvių kalba</option>
                            <option value="Luxembourgish"
                                >Lëtzebuergesch</option
                            >
                            <option value="Macedonian">македонски</option>
                            <option value="Malagasy">Fiteny Malagasy</option>
                            <option value="Malay">Bahasa melayu</option>
                            <option value="Malayalam">മലയാളം</option>
                            <option value="Maltese">Malti</option>
                            <option value="Maori">Maori</option>
                            <option value="Marathi">मराठी</option>
                            <option value="Mongolian">монгол</option>
                            <option value="Myanmar (Burmese)">ဗမာစကား</option>
                            <option value="Nepali">नेपाली </option>
                            <option value="Norwegian">Norsk</option>
                            <option value="Nyanja (Chichewa)">Chicheŵa</option>
                            <option value="Pashto">پښتو</option>
                            <option value="Persian">فارسى</option>
                            <option value="Polish">polski </option>
                            <option value="Portuguese">português</option>
                            <option value="Punjabi">ਪੰਜਾਬੀ </option>
                            <option value="Romanian">român</option>
                            <option value="Russian">Русский язык</option>
                            <option value="Samoan"> Gagana Samoa</option>
                            <option value="Scots Gaelic">Gàidhlig </option>
                            <option value="Serbian">српски </option>
                            <option value="Sesotho">Sesotho sa Leboa</option>
                            <option value="Shona">chiShona</option>
                            <option value="Sindhi">سنڌي</option>
                            <option value="Sinhala (Sinhalese)">සිංහල </option>
                            <option value="Slovak">slovenčina</option>
                            <option value="Slovenian">slovenščina</option>
                            <option value="Somali">af Soomaali</option>
                            <option value="Spanish">español </option>
                            <option value="Sundanese">Basa Sunda</option>
                            <option value="Swahili">Kiswahili</option>
                            <option value="Swedish ">Svenska </option>
                            <option value="Tagalog (Filipino)"
                                >Tagalog (Filipino)</option
                            >
                            <option value="Tajik">тоҷики </option>
                            <option value="Tamil">தமிழ் </option>
                            <option value="Telugu">తెలుగు </option>
                            <option value="Thai">ภาษาไทย</option>
                            <option value="Turkish">Türkçe</option>
                            <option value="Ukranian">Українська</option>
                            <option value="Urdu">اردو</option>
                            <option value="Uzbek"
                                >o’zbek tili ўзбек тили</option
                            >
                            <option value="Vietnamese">tiếng việt</option>
                            <option value="Welsh">Cymraeg</option>
                            <option value="Xhosa">isiXhosa</option>
                            <option value="Yiddish">ײִדיש</option>
                            <option value="Yoruba">Yorùbá</option>
                            <option value="Zulu">isiZulu</option>
                        </select> */
}

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
