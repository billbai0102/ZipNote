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
}

$(document).ready(function() {
    setTimeout(function() {
        document.getElementsByClassName('goog-te-combo')[0].name =
            'language-choice';
        document.getElementsByClassName('goog-te-combo')[0].id =
            'language-choice';
        document.getElementsByClassName('goog-te-combo')[0].onchange = 'update()';

        document.getElementsByClassName('goog-te-combo')[0].options[1].text =
            'Afrikanns';
        document.getElementsByClassName('goog-te-combo')[0].options[2].text =
            'Shqiptar';
        document.getElementsByClassName('goog-te-combo')[0].options[3].text =
            'ኣማርኛ';
        document.getElementsByClassName('goog-te-combo')[0].options[4].text =
            'العربية';
        document.getElementsByClassName('goog-te-combo')[0].options[5].text =
            'Հայերէն';
        document.getElementsByClassName('goog-te-combo')[0].options[6].text =
            'آذربايجانجا ديلي';
        document.getElementsByClassName('goog-te-combo')[0].options[7].text =
            'Euskara';
        document.getElementsByClassName('goog-te-combo')[0].options[8].text =
            'Беларуская мова';
        document.getElementsByClassName('goog-te-combo')[0].options[9].text =
            'বাংলা';
        document.getElementsByClassName('goog-te-combo')[0].options[10].text =
            'بۉسانسقى';
        document.getElementsByClassName('goog-te-combo')[0].options[11].text =
            'български';
        document.getElementsByClassName('goog-te-combo')[0].options[12].text =
            'català';
        document.getElementsByClassName('goog-te-combo')[0].options[13].text =
            'Sinugboanon';
        document.getElementsByClassName('goog-te-combo')[0].options[14].text =
            '中文';
        document.getElementsByClassName('goog-te-combo')[0].options[15].text =
            '中國傳統';
        document.getElementsByClassName('goog-te-combo')[0].options[16].text =
            'Corsu';
        document.getElementsByClassName('goog-te-combo')[0].options[17].text =
            'Hrvatski';
        document.getElementsByClassName('goog-te-combo')[0].options[18].text =
            'čeština';
        document.getElementsByClassName('goog-te-combo')[0].options[19].text =
            'dansk';
        document.getElementsByClassName('goog-te-combo')[0].options[20].text =
            'Nederlands';
        document.getElementsByClassName('goog-te-combo')[0].options[21].text =
            'Esperanto';
        document.getElementsByClassName('goog-te-combo')[0].options[22].text =
            'Eesti keel';
        document.getElementsByClassName('goog-te-combo')[0].options[23].text =
            'Suomi';
        document.getElementsByClassName('goog-te-combo')[0].options[24].text =
            'Français';
        document.getElementsByClassName('goog-te-combo')[0].options[25].text =
            'Noordfreesk';
        document.getElementsByClassName('goog-te-combo')[0].options[26].text =
            'Galego';
        document.getElementsByClassName('goog-te-combo')[0].options[27].text =
            'ქართული';
        document.getElementsByClassName('goog-te-combo')[0].options[28].text =
            'Deutsch';
        document.getElementsByClassName('goog-te-combo')[0].options[29].text =
            'ελληνικά';
        document.getElementsByClassName('goog-te-combo')[0].options[30].text =
            'Kreyòl ayisyen';
        document.getElementsByClassName('goog-te-combo')[0].options[31].text =
            'حَوْسَ';
        document.getElementsByClassName('goog-te-combo')[0].options[32].text =
            'ʻōlelo Hawaiʻi';
        document.getElementsByClassName('goog-te-combo')[0].options[33].text =
            'עברית';
        document.getElementsByClassName('goog-te-combo')[0].options[34].text =
            'हिन्दी';
        document.getElementsByClassName('goog-te-combo')[0].options[35].text =
            'Hmong';
        document.getElementsByClassName('goog-te-combo')[0].options[36].text =
            'Magyar';
        document.getElementsByClassName('goog-te-combo')[0].options[37].text =
            'Íslenska';
        document.getElementsByClassName('goog-te-combo')[0].options[38].text =
            'Igbo';
        document.getElementsByClassName('goog-te-combo')[0].options[39].text =
            'Bahasa';
        document.getElementsByClassName('goog-te-combo')[0].options[40].text =
            'Gaeilge';
        document.getElementsByClassName('goog-te-combo')[0].options[41].text =
            'Italiano';
        document.getElementsByClassName('goog-te-combo')[0].options[42].text =
            '日本語';
        document.getElementsByClassName('goog-te-combo')[0].options[43].text =
            'Basa Jawa';
        document.getElementsByClassName('goog-te-combo')[0].options[44].text =
            'ಕನ್ನಡ';
        document.getElementsByClassName('goog-te-combo')[0].options[45].text =
            'Қазақ тілі';
        document.getElementsByClassName('goog-te-combo')[0].options[46].text =
            'ភាសាខ្មែរ';
        document.getElementsByClassName('goog-te-combo')[0].options[47].text =
            '한국어';
        document.getElementsByClassName('goog-te-combo')[0].options[48].text =
            'Kurdí';
        document.getElementsByClassName('goog-te-combo')[0].options[49].text =
            'Kyrgyz';
        document.getElementsByClassName('goog-te-combo')[0].options[50].text =
            'ພາສາລາວ';
        document.getElementsByClassName('goog-te-combo')[0].options[51].text =
            'Lingua Latina';
        document.getElementsByClassName('goog-te-combo')[0].options[52].text =
            'Latviešu valoda';
        document.getElementsByClassName('goog-te-combo')[0].options[53].text =
            'Lietuvių';
        document.getElementsByClassName('goog-te-combo')[0].options[54].text =
            'Lëtzebuergesch';
        document.getElementsByClassName('goog-te-combo')[0].options[55].text =
            'македонски';
        document.getElementsByClassName('goog-te-combo')[0].options[56].text =
            'Malagasy';
        document.getElementsByClassName('goog-te-combo')[0].options[57].text =
            'melayu';
        document.getElementsByClassName('goog-te-combo')[0].options[58].text =
            'മലയാളം';
        document.getElementsByClassName('goog-te-combo')[0].options[59].text =
            'Malti';
        document.getElementsByClassName('goog-te-combo')[0].options[60].text =
            'Maori';
        document.getElementsByClassName('goog-te-combo')[0].options[61].text =
            'मराठी';
        document.getElementsByClassName('goog-te-combo')[0].options[62].text =
            'Norsk';
        document.getElementsByClassName('goog-te-combo')[0].options[63].text =
            'Chicheŵa';
        document.getElementsByClassName('goog-te-combo')[0].options[64].text =
            'پښتو';
        document.getElementsByClassName('goog-te-combo')[0].options[65].text =
            'فارسى';
        document.getElementsByClassName('goog-te-combo')[0].options[66].text =
            'polski';
        document.getElementsByClassName('goog-te-combo')[0].options[67].text =
            'português';
        document.getElementsByClassName('goog-te-combo')[0].options[68].text =
            'ਪੰਜਾਬੀ';
        document.getElementsByClassName('goog-te-combo')[0].options[69].text =
            'român';
        document.getElementsByClassName('goog-te-combo')[0].options[70].text =
            'Русский язык';
        document.getElementsByClassName('goog-te-combo')[0].options[71].text =
            'Gagana Samoa';
        document.getElementsByClassName('goog-te-combo')[0].options[72].text =
            'Gàidhlig';
        document.getElementsByClassName('goog-te-combo')[0].options[73].text =
            'српски';
        document.getElementsByClassName('goog-te-combo')[0].options[74].text =
            'Sesotho';
        document.getElementsByClassName('goog-te-combo')[0].options[75].text =
            'chiShona';
        document.getElementsByClassName('goog-te-combo')[0].options[76].text =
            'سنڌي';
        document.getElementsByClassName('goog-te-combo')[0].options[77].text =
            'සිංහල';
        document.getElementsByClassName('goog-te-combo')[0].options[78].text =
            'slovenčina';
        document.getElementsByClassName('goog-te-combo')[0].options[79].text =
            'slovenščina';
        document.getElementsByClassName('goog-te-combo')[0].options[80].text =
            'Soomaali';
        document.getElementsByClassName('goog-te-combo')[0].options[81].text =
            'español';
        document.getElementsByClassName('goog-te-combo')[0].options[82].text =
            'Basa Sunda';
        document.getElementsByClassName('goog-te-combo')[0].options[83].text =
            'Kiswahili';
        document.getElementsByClassName('goog-te-combo')[0].options[84].text =
            'Svenska';
        document.getElementsByClassName('goog-te-combo')[0].options[85].text =
            'Tagalog';
        document.getElementsByClassName('goog-te-combo')[0].options[86].text =
            'тоҷики';
        document.getElementsByClassName('goog-te-combo')[0].options[87].text =
            'தமிழ்';
        document.getElementsByClassName('goog-te-combo')[0].options[88].text =
            'తెలుగు';
        document.getElementsByClassName('goog-te-combo')[0].options[89].text =
            'ภาษาไทย';
        document.getElementsByClassName('goog-te-combo')[0].options[90].text =
            'Türkçe';
        document.getElementsByClassName('goog-te-combo')[0].options[91].text =
            'Українська';
        document.getElementsByClassName('goog-te-combo')[0].options[92].text =
            'اردو';
        document.getElementsByClassName('goog-te-combo')[0].options[93].text =
            'o’zbek tili ўзбек тили';
        document.getElementsByClassName('goog-te-combo')[0].options[94].text =
            'tiếng việt';
        document.getElementsByClassName('goog-te-combo')[0].options[95].text =
            'Cymraeg';
        document.getElementsByClassName('goog-te-combo')[0].options[96].text =
            'isiXhosa';
        document.getElementsByClassName('goog-te-combo')[0].options[97].text =
            'ײִדיש';
        document.getElementsByClassName('goog-te-combo')[0].options[98].text =
            'Yorùbá';
        document.getElementsByClassName('goog-te-combo')[0].options[99].text =
            'isiZulu';

        console.log(document.getElementsByClassName('goog-te-combo')[0]);
    }, 1000);
});



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
