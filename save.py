import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import sys

cred = credentials.Certificate("credentials.json")
firebase_admin.initialize_app(cred)

db = firestore.client()

key = sys.argv[1] + ',' + sys.argv[2]
filename = sys.argv[3]

f = open(filename, 'r')
value = "\n".join(f.readlines())
data = {
    unicode('data') : unicode(value)
}

db.collection(u'canvasApp').document(unicode(key)).set(data)

print 1
