from twilio.rest import Client

# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = '[contact billbai0102@gmail.com for twilio sid.]'
auth_token = '[contact billbai0102@gmail.com for twilio API key.]'
client = Client(account_sid, auth_token)

message = client.messages \
                .create(
                     body="Hello there",
                     from_='+12063399834',
                     to='+17343916089'
                 )

print(message.sid)
