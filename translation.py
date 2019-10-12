from google.cloud import translate
import iso639 as iso

def createTranslation(text, language):
    translate_client = translate.Client()
    language = iso.to_iso639_1(language)

    translation = translate_client.translate(
        text,
        target_language=language
    )
    return translation['translatedText']
