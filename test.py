import translation as t
import getsearch

str = (getsearch.getInfoByHash('-LqyiulvtclaFSFsC4_Q')[2])
print(str)
s = t.createTranslation(str,'Tamil')
print('----------')
print(s)
