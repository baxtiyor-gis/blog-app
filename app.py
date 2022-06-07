import os
import time


for i in range(1,10): 
    file = open("file.txt","a")
    file.write("Time: %s"%time.ctime())   
    file.close()
    os.system("git add .")
    os.system("git commit -m 'Commited'")

    time.sleep(1)
 
