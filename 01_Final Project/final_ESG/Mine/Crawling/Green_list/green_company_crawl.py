import openpyxl
import pandas as pd

file_path = 'top200_name_list.csv'
top_200 = pd.read_csv(file_path, sep='\t')

excel_file_path = './green_datas/green_company_GR.xlsx'
data = pd.read_excel(excel_file_path)

df_GR = pd.DataFrame(data.values[1:], columns=data.iloc[0])
df_GR = df_GR.drop(columns=['GR기준', '규격명', '종류','유효인증번호', '만료기간','인증일자', '대표자', '순번', '사업자등록번호', '소 재 지']) # 

df_GR[['시작', '종료']] = df_GR['유효기간'].str.split('~', expand=True)
df_GR['시작'] = df_GR['시작'].str.strip().str.replace('.', '-')
df_GR['종료'] = df_GR['종료'].str.strip().str.replace('.', '-')

df_GR['시작'] = pd.to_datetime(df_GR['시작'].str.replace('\n', ''), errors='coerce').dt.strftime('%Y-%m-%d')
df_GR['종료'] = pd.to_datetime(df_GR['종료'], errors='coerce').dt.strftime('%Y-%m-%d')

df_GR = df_GR.drop(columns='유효기간')
df_GR = df_GR.rename(columns={'업체명': '기업명'})
df_GR = df_GR.rename(columns={'분야': '제품명'})
df_GR['기업명'] = df_GR['기업명'].str.replace("\(주\)|주식회사|㈜|주\)|\(유\)|\)|에스아이씨엔티\n\(구.|\(합|\(구. |\"", "", regex=True)

df_GR = df_GR.drop(columns='종료')
df_GR = df_GR.dropna()

df_GR['시작'] = pd.to_datetime(df_GR['시작'])
df_GR['시작'] = df_GR['시작'].dt.year.astype(int) 
df_GR = df_GR.rename(columns={'시작': '인증연도'})
df_GR = df_GR[['기업명', '인증연도', '제품명']]

rename = {
    '한일시멘트 포항공장': '한일시멘트',
    '현대제철 인천공장': '현대제철',
    '현대제철 포항1공장': '현대제철',
    '현대제철 포항2공장': '현대제철',
    '포스코 포항제철소': '포스코인터내셔널',
}

for old_name, new_name in rename.items():
    df_GR['기업명'] = df_GR['기업명'].replace(old_name, new_name, regex=True)
    df_GR['기업명'] = df_GR['기업명'].str.strip()
rename_df_GR = df_GR
rename_df_GR.to_csv('green_test.csv', index=False)