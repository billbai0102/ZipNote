from google.cloud import translate
import iso639 as iso
import os

credential_path = "TranslationKey.json"
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = credential_path

def createTranslation(text, language):
    translate_client = translate.Client()
    try:
        language = iso.to_iso639_1(language)
    except: 
        language = iso.to_iso639_1(language)

    try:
        translation = translate_client.translate(
            text,
            target_language=language
        )
    except: 
        return 'Unfortunately, that language is not supported.'
    return translation['translatedText']