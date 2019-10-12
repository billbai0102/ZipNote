from twilio.rest import Client

# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'ACfb14e1aca55a02457161456ad28e2311'
auth_token = 'cb9d1579d693aa64d9e4d7a113efebbe'
client = Client(account_sid, auth_token)

message = client.messages \
                .create(
                     body="Hello Aditya",
                     from_='+12063399834',
                     to='+14372886819'
                 )

print(message.sid)