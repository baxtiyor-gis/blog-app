import os
import time
from alive_progress import alive_bar

total = 0
ignore = ""

with open("ignore.js", "r") as f:
    ignore = f.read()
    total = len(ignore)
    

with open("moment.js", "w") as f:
    f.write("")


with alive_bar(total) as bar:
    for i in range(total):
        with open("moment.js", "a") as f:
            f.write(ignore[i])
        os.system("git add .")
        os.system("git commit -m 'Commited'")
        time.sleep(0.1)
        bar()

os.system("git push")
