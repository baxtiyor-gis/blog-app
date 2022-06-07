import os
import time

file = open("file.txt","w")

for i in range(1,10): 
    file.write("Time: %s"%time.ctime())   
    os.system("git add .")
    os.system("git commit -m 'Commited at %s'"%time.ctime())
    time.sleep(60)
 
file.close()