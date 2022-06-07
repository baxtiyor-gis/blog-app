import os
import time


for i in range(1,100): 
    file = open("file.txt","a")
    file.write("Time: %s \n"%time.ctime())   
    file.close()
    os.system("git add .")
    os.system("git commit -m 'Commited'")
    # time.sleep(0.5)

os.system("git push")
