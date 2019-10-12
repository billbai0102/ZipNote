# "-LqyiulvtclaFSFsC4_Q"
# "-Lqyl7NHN9vWsMeJYBIM"

class NoteAnalysis():
    def __init___(self, note1_key, note2_key):
        self.note1_key = note1_key
        self.note2_key = note2_key
        self.run_quickstart()

    def run_quickstart(self):
        from fuzzywuzzy import fuzz
        # [START language_quickstart]
        # Imports the Google Cloud client library
        # [START language_python_migration_imports]
        from google.cloud import language
        from google.cloud.language import enums
        from google.cloud.language import types
        # [END language_python_migration_imports]
        from database import DatabaseManager, Note
        dataIn = DatabaseManager("notes")
        dataOut = DatabaseManager("super_notes")

        # Instantiates a client
        # [START language_python_migration_client]
        client = language.LanguageServiceClient()
        # [END language_python_migration_client]

        text1 = dataIn.get_note_key(self.note1_key)["note"]
        text2 = dataIn.get_note_key(self.note2_key)["note"]

        # __________________________
        #       READ VALUE 1
        # __________________________

        # with open('input1.txt', 'r') as file:
        #     text1 = file.read().replace('\n', '')


        # ___________________________
        #       READ VALUE 2
        # ___________________________

        # with open('input2.txt', 'r') as file2:
        #     text2 = file2.read().replace('\n', '')

        words1 = text1.split(".")
        words2 = text2.split(".")

        for x in words1:
            if (x[:1] == " "):
                x = x[1:]

        for x in words2:
            if (x[:1] == " "):
                x = x[1:]

        keywords1 = []
        key_sentances1 = ""
        key_sent_array_1 = []
        keywords2 = []
        key_sentances2 = ""
        key_sent_array_2 = []

        # The text to analyze
        document1 = types.Document(
            content=text1,
            type=enums.Document.Type.PLAIN_TEXT)

        document2 = types.Document(
            content=text2,
            type=enums.Document.Type.PLAIN_TEXT)

        outputText = ""

        # Detects the sentiment of the text
        response1 = client.analyze_entities(document=document1, encoding_type='UTF32',)
        for entity in response1.entities:
            if entity.salience>0.015:
                keywords1.append(entity.name)
                print('=' * 20)
                print('name: {0}'.format(entity.name))
                print('type: {0}'.format(entity.type))
                print('metadata: {0}'.format(entity.metadata))
                print('salience: {0}'.format(entity.salience))

        response2 = client.analyze_entities(document=document2, encoding_type='UTF32', )
        for entity in response2.entities:
            if entity.salience > 0.015:
                keywords2.append(entity.name)
                print('=' * 20)
                print('name: {0}'.format(entity.name))
                print('type: {0}'.format(entity.type))
                print('metadata: {0}'.format(entity.metadata))
                print('salience: {0}'.format(entity.salience))

        print("Keys 1:", keywords1)
        print("Keys 2:", keywords2)

        for x in words1:
            for i in keywords1:
                if(x.find(i)>-1) and x not in key_sentances1:
                    key_sentances1 += x + "\n"
                    key_sent_array_1.append(x)

        for x in words2:
            for i in keywords2:
                if(x.find(i)>-1) and x not in key_sentances2:
                    key_sentances2 += x + "\n"
                    key_sent_array_2.append(x)

        #print(key_sentances2)

        #out = open("output1.txt", "w")
        #out.write(key_sentances1)
        #out.close()

        #out = open("output2.txt", "w")
        #out.write(key_sentances2)
        #out.close()

        newVals = [" "]

        for x in key_sent_array_1:
            canAdd = True
            for i in newVals:
                Token_Set_Ratio = fuzz.token_set_ratio(x, i)
                if Token_Set_Ratio > 80:
                    canAdd = False
            if canAdd:
                newVals.append(x)

        for x in key_sent_array_2:
            canAdd = True
            for i in newVals:
                Token_Set_Ratio = fuzz.token_set_ratio(x, i)
                if Token_Set_Ratio > 50:
                    canAdd = False
            if canAdd:
                newVals.append(x)

        newValsString = ""

        for x in newVals:
            newValsString += x + "\n"

        #writing to database
        super_note = Note(2, "Physics", newValsString)
        dataOut.add_note_to_db(super_note)

        #_______________________________________
        #       ADDING OUTPUT
        #_______________________________________

        # final = open("final.txt", "w")
        # final.write(newValsString)
        # final.close()

        print(key_sent_array_1)

# if __name__ == '__main__':
#     run_quickstart()