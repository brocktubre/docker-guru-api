FROM mongo

COPY init.json /init.json
CMD mongoimport --host mongo --port 27017 --db gurudb --collection gurus --drop --type json --file /init.json --jsonArray