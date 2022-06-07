import os
import time


for i in range(1,10): 
    file = open("file.txt","w")
    file.write("Time: %s"%time.ctime())   
    os.system("git add .")
    os.system("git commit -m 'Commited'")
    file.close()
    time.sleep(1)
 
