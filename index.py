#Converting Csv to Json

import json 
import csv 
with open ('Data.csv','r') as f:
    
    reader = csv.reader(f)
    next(reader)
    # next(reader)
    data = {"Details" :[]}
    for i in reader:
        data["Details"].append({"Typeoffamilycode": i[3], "spenton": i[4], "amount": i[12] })
    print(data)

with open ("names.json", "w") as f:
    json.dump(data, f, indent=4)