from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4, landscape
from reportlab.lib.colors import HexColor, Color
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase.pdfmetrics import stringWidth
from PIL import Image
from pathlib import Path
import math

ROOT = Path('/Users/luisalvarezfranceschi/Documents/dev/clients/serlimca-page')
OUT = ROOT / 'output/pdf/serlimca-brochure-2026.pdf'
ASSETS = ROOT / 'src/assets'
W, H = landscape(A4)
GOLD = HexColor('#D8B236')
INK = HexColor('#111418')
GRAPHITE = HexColor('#242B31')
SLATE = HexColor('#5B6770')
PALE = HexColor('#E9ECEC')
WHITE = HexColor('#FFFFFF')
MUTED = HexColor('#B8C0C5')
DARK_MUTED = HexColor('#74808A')
RED = HexColor('#C63A37')
FONT = '/System/Library/Fonts/Supplemental/Arial.ttf'
BOLD = '/System/Library/Fonts/Supplemental/Arial Bold.ttf'
pdfmetrics.registerFont(TTFont('ArialCustom', FONT))
pdfmetrics.registerFont(TTFont('ArialCustomBold', BOLD))
R = 'ArialCustom'
B = 'ArialCustomBold'


def set_fill(c, color): c.setFillColor(color)
def draw_text(c, text, x, y, size=10, color=INK, font=R, tracking=0):
    c.setFont(font, size); c.setFillColor(color)
    if tracking:
        t = c.beginText(x, y); t.setFont(font, size); t.setFillColor(color); t.setCharSpace(tracking); t.textOut(text); c.drawText(t)
    else: c.drawString(x, y, text)

def wrap(text, font, size, width):
    words = text.split(); lines=[]; line=''
    for word in words:
        test = word if not line else line+' '+word
        if stringWidth(test,font,size) <= width or not line: line=test
        else: lines.append(line); line=word
    if line: lines.append(line)
    return lines

def paragraph(c, text, x, y, width, size=10.5, leading=None, color=SLATE, font=R):
    leading = leading or size*1.42
    lines = wrap(text,font,size,width)
    c.setFont(font,size); c.setFillColor(color)
    for i,line in enumerate(lines): c.drawString(x,y-i*leading,line)
    return y-len(lines)*leading

def draw_image_cover(c, path, x, y, w, h, darken=0):
    im=Image.open(path); iw,ih=im.size
    scale=max(w/iw,h/ih); dw,dh=iw*scale,ih*scale
    dx=x+(w-dw)/2; dy=y+(h-dh)/2
    c.saveState(); p=c.beginPath(); p.rect(x,y,w,h); c.clipPath(p,stroke=0,fill=0)
    c.drawImage(ImageReader(im),dx,dy,dw,dh,mask='auto')
    if darken:
        c.setFillColor(Color(0,0,0,alpha=darken)); c.rect(x,y,w,h,stroke=0,fill=1)
    c.restoreState()

def draw_image_contain(c,path,x,y,w,h):
    im=Image.open(path); iw,ih=im.size; scale=min(w/iw,h/ih)
    dw,dh=iw*scale,ih*scale
    c.drawImage(ImageReader(im),x+(w-dw)/2,y+(h-dh)/2,dw,dh,mask='auto')

def sun_mark(c,x,y,s=20,fill=GOLD):
    c.saveState(); c.setStrokeColor(fill); c.setFillColor(fill); c.setLineWidth(s*.11)
    for a in range(0,360,45):
        r=math.radians(a); c.line(x+math.cos(r)*s*.66,y+math.sin(r)*s*.66,x+math.cos(r)*s*.98,y+math.sin(r)*s*.98)
    c.circle(x,y,s*.48,stroke=0,fill=1); c.restoreState()

def brand(c,x,y,on_dark=True,small=False):
    sun_mark(c,x,y+(0 if small else 1),8 if small else 11)
    draw_text(c,'SERLIMCA',x+(15 if small else 20),y-(3 if small else 4),10 if small else 15,WHITE if on_dark else INK,B)
    draw_text(c,"J-31016439-8",x+(15 if small else 20),y-(13 if small else 15),5.5 if small else 7,GOLD if on_dark else SLATE,B,0.5)

def grid(c, dark=False):
    c.saveState(); c.setStrokeColor(Color(1,1,1,alpha=.05) if dark else Color(.1,.13,.16,alpha=.06)); c.setLineWidth(.35)
    for x in range(0,int(W)+1,28): c.line(x,0,x,H)
    for y in range(0,int(H)+1,28): c.line(0,y,W,y)
    c.restoreState()

def header(c, section, page, dark=False):
    color=WHITE if dark else INK
    draw_text(c,'PERFIL CORPORATIVO 2026',46,H-33,7,GOLD,B,1.4)
    draw_text(c,section.upper(),W-46-stringWidth(section.upper(),B,7),H-33,7,color,B,1.1)
    c.setStrokeColor(GOLD); c.setLineWidth(1); c.line(46,H-43,W-46,H-43)
    draw_text(c,f'{page:02d}',W-60,25,8,GOLD,B,1)
    draw_text(c,'SERLIMCA',46,25,7,MUTED if dark else DARK_MUTED,B,1.2)

def title_block(c, eyebrow, title, body, x=46, y=480, w=440, dark=False):
    draw_text(c,eyebrow.upper(),x,y,8,GOLD,B,1.9)
    ty=y-35
    lines=wrap(title,B,30,w)
    c.setFillColor(WHITE if dark else INK); c.setFont(B,30)
    for i,line in enumerate(lines): c.drawString(x,ty-i*33,line)
    bottom=ty-len(lines)*33-13
    return paragraph(c,body,x,bottom,w,11.2,16,MUTED if dark else SLATE)

def card(c,x,y,w,h,number,title,body,dark=False):
    bg=Color(1,1,1,alpha=.07) if dark else WHITE
    c.setFillColor(bg); c.setStrokeColor(Color(1,1,1,alpha=.18) if dark else HexColor('#D4D9DC')); c.rect(x,y,w,h,stroke=1,fill=1)
    draw_text(c,number,x+18,y+h-27,8,GOLD,B,1.3)
    tcol=WHITE if dark else INK; bcol=MUTED if dark else SLATE
    bottom=paragraph(c,title,x+18,y+h-58,w-36,14,17,tcol,B)
    paragraph(c,body,x+18,bottom-9,w-36,9.3,13,bcol,R)

def divider(c,x,y,w=64): c.setStrokeColor(GOLD); c.setLineWidth(4); c.line(x,y,x+w,y)

def metric(c,x,y,num,label,dark=False):
    draw_text(c,num,x,y,29,GOLD,B)
    paragraph(c,label,x,y-17,135,8.8,11.5,MUTED if dark else SLATE,B)

def page_cover(c):
    draw_image_cover(c,ASSETS/'imagen-16.jpeg',0,0,W,H,.42)
    c.setFillColor(Color(.04,.06,.07,alpha=.80)); c.rect(0,0,W,H,stroke=0,fill=1)
    # strong left slab
    c.setFillColor(Color(.05,.07,.08,alpha=.86)); c.rect(0,0,W*.62,H,stroke=0,fill=1)
    grid(c,True); brand(c,62,H-72,True)
    draw_text(c,'PERFIL CORPORATIVO',62,350,9,GOLD,B,2.2)
    for i,line in enumerate(['PRECISIÓN Y ESCALA','INDUSTRIAL PARA','OPERACIONES CRÍTICAS']):
        draw_text(c,line,62,312-i*42,33,WHITE,B)
    divider(c,62,167,110)
    paragraph(c,'Capacidades operativas y logísticas para el sector petrolero y la industria venezolana.',62,140,360,13,19,PALE,R)
    draw_text(c,'2026',62,57,11,GOLD,B,2.8)
    draw_text(c,'EL TIGRE · ANZOÁTEGUI · VENEZUELA',135,59,8,WHITE,B,1.6)
    c.showPage()

def page_evolution(c):
    c.setFillColor(WHITE); c.rect(0,0,W,H,fill=1,stroke=0); grid(c); header(c,'Nuestra evolución',2)
    title_block(c,'Desde 2003','Una trayectoria construida en campo.','SERLIMCA nace en El Tigre, estado Anzoátegui, y evoluciona con una visión clara: aportar capacidad técnica, logística y humana a operaciones de alta exigencia.')
    # timeline
    y=214; x1=80; x2=W-80
    c.setStrokeColor(GRAPHITE); c.setLineWidth(10); c.line(x1,y,x2,y)
    c.setStrokeColor(GOLD); c.setLineWidth(10); c.line(x1,y,x1+(x2-x1)*.68,y)
    for x,year,heading,body in [
        (x1,'2003','Origen','Inicio de operaciones en El Tigre, con foco en servicios para la industria petrolera.'),
        (x1+(x2-x1)*.68,'2026','Evolución','Capacidad operativa ampliada para logística pesada, izamiento y mantenimiento especializado.'),
    ]:
        c.setFillColor(WHITE); c.setStrokeColor(GOLD); c.setLineWidth(3); c.circle(x,y,17,stroke=1,fill=1)
        draw_text(c,year,x-19,y+45,13,INK,B)
        card(c,45 if year == '2003' else x-125,65,250,106,'',heading,body)
    c.showPage()

def page_dna(c):
    c.setFillColor(INK); c.rect(0,0,W,H,fill=1,stroke=0); grid(c,True); header(c,'ADN corporativo',3,True)
    draw_image_cover(c,ASSETS/'imagen-1.webp',W*.57,0,W*.43,H,.35)
    c.setFillColor(Color(.06,.08,.09,alpha=.38)); c.rect(W*.57,0,W*.43,H,fill=1,stroke=0)
    title_block(c,'Nuestro propósito','Capacidad que mueve confianza.','Combinamos experiencia de campo, recursos técnicos y una cultura de seguridad para responder a retos operativos con orden, oportunidad y calidad.',46,475,400,True)
    card(c,46,102,220,155,'01','VISIÓN','Ser una empresa referente de servicios petroleros a nivel nacional.',True)
    card(c,284,102,220,155,'02','MISIÓN','Prestar servicios a la industria petrolera con estándares de calidad, seguridad y compromiso con cada cliente.',True)
    c.showPage()

def page_values(c):
    c.setFillColor(PALE); c.rect(0,0,W,H,fill=1,stroke=0); grid(c); header(c,'Eje de trabajo',4)
    title_block(c,'Valores','La forma en que hacemos el trabajo importa.','Nuestros valores orientan la toma de decisiones, el trabajo en equipo y la relación con clientes, colaboradores y comunidades.',46,480,390)
    values=['Honestidad','Calidad','Puntualidad','Pasión','Competitividad','Trabajo en equipo','Orientación al cliente','Responsabilidad social','Resolución de problemas']
    x0=480;y0=390;cellw=105;cellh=97
    for i,val in enumerate(values):
        col=i%3; row=i//3; x=x0+col*cellw; y=y0-row*cellh
        fill=GOLD if i in (1,7) else RED if i==2 else WHITE
        c.setFillColor(fill); c.setStrokeColor(INK); c.setLineWidth(1); c.rect(x,y,cellw,cellh,fill=1,stroke=1)
        label=wrap(val,B,10,cellw-18)
        for j,line in enumerate(label): draw_text(c,line,x+9,y+cellh/2+7-j*12,10,INK,B)
    c.showPage()

def page_pillars(c):
    c.setFillColor(INK); c.rect(0,0,W,H,fill=1,stroke=0); grid(c,True); header(c,'Portafolio',5,True)
    title_block(c,'Portafolio de servicios','Tres pilares. Una respuesta integral.','Nuestro portafolio reúne capacidades complementarias para apoyar la continuidad de operaciones industriales y petroleras.',46,470,530,True)
    pillars=[('01','IZAMIENTO Y\nTRANSPORTE','imagen-8.webp'),('02','MANTENIMIENTO\nESPECIALIZADO','imagen-9.webp'),('03','MUDANZA DE\nEQUIPOS','imagen-11.webp')]
    for i,(num,label,img) in enumerate(pillars):
        x=46+i*252; y=76; w=230; h=210
        draw_image_cover(c,ASSETS/img,x,y,w,h,.55)
        c.setStrokeColor(GOLD); c.setLineWidth(2); c.rect(x,y,w,h,stroke=1,fill=0)
        draw_text(c,num,x+16,y+h-27,8,GOLD,B,1.3)
        for j,l in enumerate(label.split('\n')): draw_text(c,l,x+16,y+35-j*21,15,WHITE,B)
    c.showPage()

def page_pillar_lifting(c):
    c.setFillColor(WHITE); c.rect(0,0,W,H,fill=1,stroke=0); grid(c); header(c,'Pilar operativo I',6)
    draw_image_cover(c,ASSETS/'imagen-17.jpeg',485,0,W-485,H,.18)
    c.setFillColor(Color(1,1,1,alpha=.20)); c.rect(W*.54,0,W*.46,H,fill=1,stroke=0)
    title_block(c,'Pilar I','Izamiento y transporte de carga.','Movilizamos recursos y ejecutamos maniobras de carga pesada para operaciones que requieren precisión, coordinación y capacidad técnica.',46,460,320)
    for i,(h,b) in enumerate([
        ('Capacidad de carga','Soluciones para cargas pesadas e infraestructura crítica.'),
        ('Ejecución técnica','Maniobras de alta precisión respaldadas por operadores especializados.'),
        ('Transporte seguro','Apoyo logístico para integrar carga, equipos y suministro en campo.'),
    ]): card(c,46+i*142,92,132,135,f'0{i+1}',h,b)
    c.showPage()

def page_pillar_maintenance(c):
    c.setFillColor(INK); c.rect(0,0,W,H,fill=1,stroke=0); grid(c,True); header(c,'Pilar operativo II',7,True)
    draw_image_cover(c,ASSETS/'imagen-9.webp',W*.56,0,W*.44,H,.42)
    c.setFillColor(Color(.04,.05,.06,alpha=.34)); c.rect(W*.56,0,W*.44,H,fill=1,stroke=0)
    title_block(c,'Pilar II','Mantenimiento especializado.','Mantenimiento y reparación de balancines y Rotaflex para apoyar la disponibilidad y continuidad de equipos en operación.',46,468,400,True)
    points=['Diagnóstico y reparación de unidades y componentes mecánicos.','Minimización de tiempos de inactividad en pozos productivos.','Intervenciones preventivas y correctivas orientadas a la calidad.']
    y=220
    for i,p in enumerate(points):
        c.setFillColor(GOLD); c.circle(58,y-i*45,6,fill=1,stroke=0); draw_text(c,'✓',55.2,y-i*45-3.5,9,INK,B)
        paragraph(c,p,76,y-i*45-4,365,11,15,WHITE,R)
    c.showPage()

def page_pillar_moving(c):
    c.setFillColor(WHITE); c.rect(0,0,W,H,fill=1,stroke=0); grid(c); header(c,'Pilar operativo III',8)
    draw_image_cover(c,ASSETS/'imagen-11.webp',0,0,W*.46,H,.18)
    title_block(c,'Pilar III','Mudanza de equipos.','Taladros, Workover y Cabilleros.',430,470,290)
    card(c,430,225,310,126,'OPERACIÓN','Control de maniobra','Coordinación logística para una movilización segura y eficiente de equipos de gran escala.')
    draw_text(c,'DE CAMPO A CAMPO',430,165,8,GOLD,B,1.8)
    paragraph(c,'Una respuesta coordinada que integra movilización, transporte, carga y seguimiento operativo.',430,137,285,10.5,15,SLATE,R)
    c.showPage()

def page_capacity(c):
    c.setFillColor(PALE); c.rect(0,0,W,H,fill=1,stroke=0); grid(c); header(c,'Capacidad operativa',9)
    title_block(c,'Capacidad','Recursos para responder con control.','Nuestro enfoque integra equipos de alta capacidad, despliegue operativo, talento especializado y una cultura de prevención.',46,478,390)
    draw_image_cover(c,ASSETS/'imagen-1.webp',480,230,300,235,.10)
    metrics=[('01','EQUIPOS DE ALTA CAPACIDAD','Logística de campo.'),('02','DESPLIEGUE Y ESTABILIZACIÓN','Continuidad operativa.'),('03','TALENTO ESPECIALIZADO','Seguridad en campo.'),('04','CULTURA DE PREVENCIÓN','Prevención planificada.')]
    for i,(n,t,b) in enumerate(metrics):
        x=46+(i%2)*210;y=175-(i//2)*130; card(c,x,y,192,128,n,t,b)
    c.showPage()

def page_fleet(c):
    c.setFillColor(INK); c.rect(0,0,W,H,fill=1,stroke=0); grid(c,True); header(c,'Matriz de flota',10,True)
    title_block(c,'Matriz de capacidad','Flota orientada a cada necesidad.','Una combinación de equipos para maniobras pesadas, apoyo logístico y movilización de recursos en campo.',46,476,530,True)
    x=46;y=100; cols=[180,170,170,170]; heads=['PILAR','GRÚAS\nTELESCÓPICAS','GANDOLAS Y\nPLATAFORMAS','CAMIONES DE\nBRAZO HIDRÁULICO']
    rows=[('IZAMIENTO','Maniobras de\ncarga pesada','Apoyo\nlogístico','Movilización\nauxiliar'),('MANTENIMIENTO','Elevación de\nbalancines','Transporte de\nrefacciones','Logística de\ncomponentes Rotaflex'),('MUDANZA','Carga y descarga\nen locación','Transporte de\ntaladros Workover','Escolta y\ncarga menor')]
    hh=72; rh=80
    for j,w in enumerate(cols):
        c.setFillColor(GRAPHITE); c.setStrokeColor(Color(1,1,1,alpha=.22)); c.rect(x+sum(cols[:j]),y+rh*3,w,hh,fill=1,stroke=1)
        for k,line in enumerate(heads[j].split('\n')): draw_text(c,line,x+sum(cols[:j])+14,y+rh*3+38-k*12,8,GOLD,B,1.1)
    for i,row in enumerate(rows):
        yy=y+rh*(2-i)
        for j,w in enumerate(cols):
            xx=x+sum(cols[:j]); c.setFillColor(Color(1,1,1,alpha=.06)); c.setStrokeColor(Color(1,1,1,alpha=.22)); c.rect(xx,yy,w,rh,fill=1,stroke=1)
            fs=10 if j==0 else 9.3; col=WHITE if j==0 else MUTED
            for k,line in enumerate(row[j].split('\n')): draw_text(c,line,xx+14,yy+rh/2+7-k*12,fs,col,B if j==0 else R)
    c.showPage()

def page_partners_alignment(c):
    c.setFillColor(WHITE); c.rect(0,0,W,H,fill=1,stroke=0); grid(c); header(c,'Referencias y estrategia',11)
    title_block(c,'Socios de confianza','Referencias corporativas que hablan de trayectoria.','Los siguientes nombres se presentan como referencias corporativas incluidas por SERLIMCA. Esta pieza no declara vínculos contractuales vigentes.',46,475,395)
    partners=['CNPC','BOHAI','HUAWEI','ENSING','SAN ANTONIO','VENALMAQ']
    for i,p in enumerate(partners):
        x=470+(i%3)*112;y=385-(i//3)*80
        c.setFillColor(INK); c.rect(x,y,100,56,fill=1,stroke=0); draw_text(c,p,x+50-stringWidth(p,B,13)/2,y+22,13,GOLD,B)
    c.setFillColor(PALE); c.rect(46,78,W-92,118,fill=1,stroke=0)
    cols=[('ESTRATÉGICA','Visión de crecimiento sostenido y servicios de alto valor.'),('OPERACIONAL','Recursos y procesos listos para ejecutar con consistencia.'),('TÁCTICA','Acciones comerciales y de campo orientadas a resultados.')]
    for i,(t,b) in enumerate(cols):
        x=65+i*238; draw_text(c,f'0{i+1}',x,166,7,GOLD,B,1.3); draw_text(c,t,x,140,11,INK,B,1.2); paragraph(c,b,x,120,185,8.8,12,SLATE,R)
    c.showPage()

def page_closing(c):
    draw_image_cover(c,ASSETS/'imagen-12.jpeg',0,0,W,H,.45)
    c.setFillColor(Color(.05,.07,.08,alpha=.78)); c.rect(0,0,W,H,fill=1,stroke=0); grid(c,True); brand(c,62,H-72,True)
    draw_text(c,'LISTOS PARA EL PRÓXIMO',62,365,28,WHITE,B)
    draw_text(c,'DESAFÍO LOGÍSTICO.',62,328,28,WHITE,B)
    divider(c,62,294,115)
    paragraph(c,'Garantizamos una respuesta alineada con estándares de calidad, seguridad y servicio para operaciones que no se detienen.',62,257,350,12,18,PALE,R)
    c.setFillColor(Color(1,1,1,alpha=.10)); c.setStrokeColor(Color(1,1,1,alpha=.24)); c.rect(62,104,330,99,fill=1,stroke=1)
    draw_text(c,'CONTÁCTENOS',82,174,8,GOLD,B,1.7)
    draw_text(c,'0426-5831206',82,145,17,WHITE,B)
    draw_text(c,'serlimca@gmail.com  ·  www.serlimca.com',82,122,10,PALE,R)
    draw_text(c,'EL TIGRE · ANZOÁTEGUI · VENEZUELA',62,55,8,GOLD,B,1.8)
    c.showPage()

c=canvas.Canvas(str(OUT),pagesize=landscape(A4),pageCompression=1)
c.setTitle('SERLIMCA - Perfil Corporativo 2026')
c.setAuthor('SERLIMCA')
c.setSubject('Capacidades operativas y logísticas')
for fn in [page_cover,page_evolution,page_dna,page_values,page_pillars,page_pillar_lifting,page_pillar_maintenance,page_pillar_moving,page_capacity,page_fleet,page_partners_alignment,page_closing]: fn(c)
c.save()
print(OUT)
