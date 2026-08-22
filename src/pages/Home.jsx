import { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight, Check, MapPin, MessageCircle, Phone, ShieldCheck, Star } from 'lucide-react'
import AccordionItem from '../components/animation/Accordion'
import TextReveal from '../components/animation/TextReveal'
import LeadForm from '../components/LeadForm'
import JsonLd from '../components/ui/JsonLd'
import FounderVideoSection from '../components/FounderVideoSection'
import VideoTestimonialsSection from '../components/VideoTestimonialsSection'
import { beforeAfterCases } from '../data/cases'
import { teamMembers } from '../data/team'
import { useLocale } from '../hooks/useLocale'
import './HomeReplica.css'
import './DebodBrand.css'

const t = (en, es) => ({ en, es })
const benefits = [t('Specialist-led dentistry', 'Odontología dirigida por especialistas'), t('Digital 3D diagnosis', 'Diagnóstico digital 3D'), t('In-house dental laboratory', 'Laboratorio dental propio'), t('English-speaking team', 'Equipo que habla inglés')]
const treatments = [
  { n:'01', title:t('Full-mouth rehabilitation','Rehabilitación oral completa'), text:t('A coordinated plan to restore function, health and aesthetics.','Un plan coordinado para recuperar función, salud y estética.'), img:'/Images/tratamientos/webp/rehabilitacion.webp' },
  { n:'02', title:t('Dental implants','Implantes dentales'), text:t('Precise, digitally planned implant dentistry from diagnosis to restoration.','Implantología precisa y planificada digitalmente, del diagnóstico a la restauración.'), img:'/Images/tratamientos/webp/implantologia.webp' },
  { n:'03', title:t('Invisible orthodontics','Ortodoncia invisible'), text:t('Specialist orthodontic care with aligners and close clinical follow-up.','Ortodoncia especializada con alineadores y seguimiento clínico cercano.'), img:'/Images/tratamientos/webp/ortodoncia.webp' },
  { n:'04', title:t('Smile design','Diseño de sonrisa'), text:t('Natural, conservative aesthetic dentistry supported by our own laboratory.','Estética natural y conservadora con el apoyo de nuestro laboratorio propio.'), img:'/Images/tratamientos/webp/estetica.webp' },
]
const tech=['Invisalign®','CEREC®','CAD/CAM','3D CBCT','Digital Smile Design','Implantology']
const needs = [
 { icon:'01', label:t('I am missing one or more teeth','Me falta uno o varios dientes'), href:'/tratamientos/implantes-dentales-arguelles-madrid-espana/' },
 { icon:'02', label:t('I want to improve my smile','Quiero mejorar mi sonrisa'), href:'/tratamientos/carillas-de-porcelana-arguelles-madrid-espana/' },
 { icon:'03', label:t('I need to correct my bite','Necesito corregir mi mordida'), href:'/tratamientos/invisalign-alineadores-transparentes-arguelles-madrid-espana/' },
 { icon:'04', label:t('I have pain or an emergency','Tengo dolor o una urgencia'), href:'/urgencias-dentales-arguelles-madrid/' },
 { icon:'05', label:t('I am looking for a second opinion','Busco una segunda opinión'), href:'#consultation' },
 { icon:'06', label:t('I live outside Madrid','I live outside Madrid'), href:'/en/dental-tourism-madrid/' },
]
const faqs = [
 { q:t('What happens during the first visit?','¿Qué ocurre en la primera visita?'), a:t('We review your medical and dental history, listen to your goals and perform a complete clinical assessment. If your case requires it, we use digital photography and 3D diagnosis before explaining the available options and next steps.','Revisamos tus antecedentes médicos y dentales, escuchamos tus objetivos y realizamos una evaluación clínica completa. Si el caso lo requiere, utilizamos fotografía digital y diagnóstico 3D antes de explicarte las opciones y los siguientes pasos.') },
 { q:t('Do you offer financing?','¿Ofrecéis financiación?'), a:t('Yes. Eligible treatments can be financed in instalments. The team explains the available terms after the diagnosis and before you approve any treatment.','Sí. Los tratamientos elegibles pueden financiarse en cuotas. El equipo explica las condiciones disponibles después del diagnóstico y antes de que apruebes cualquier tratamiento.') },
 { q:t('Can international patients be treated?','¿Atendéis a pacientes internacionales?'), a:t('Yes. We coordinate remote case review, appointment planning and treatment timing for patients travelling to Madrid. Our team can assist in Spanish and English.','Sí. Coordinamos la revisión remota del caso, las citas y los tiempos de tratamiento para pacientes que viajan a Madrid. Nuestro equipo puede atenderte en español e inglés.') },
 { q:t('Do you have an in-house dental laboratory?','¿Contáis con laboratorio dental propio?'), a:t('Yes. Debod Dental Lab works directly with the clinical team, allowing closer control of design, colour, fit, quality and turnaround for each restoration.','Sí. Debod Dental Lab trabaja directamente con el equipo clínico, permitiendo un control más cercano del diseño, color, ajuste, calidad y tiempos de cada restauración.') },
 { q:t('Where is Debod Dental Clinic?','¿Dónde está Debod Dental Clinic?'), a:t('We are in Argüelles, central Madrid, on Calle de Ferraz. The location is accessible by public transport and the team will send you exact directions when confirming your appointment.','Estamos en Argüelles, en el centro de Madrid, en la calle de Ferraz. Puedes llegar en transporte público y el equipo te enviará indicaciones exactas al confirmar tu cita.') },
]

function CTA({ children, href='#consultation', outline=false }) { return <a className={`dd-cta ${outline?'dd-cta--outline':''}`} href={href}>{children}<ArrowUpRight size={16}/></a> }
function Eyebrow({ children }) { return <div className="dd-eyebrow"><span/>{children}</div> }
function SpotlightCard({ children, className='', ...props }) {
 const move=e=>{const r=e.currentTarget.getBoundingClientRect();e.currentTarget.style.setProperty('--spot-x',`${e.clientX-r.left}px`);e.currentTarget.style.setProperty('--spot-y',`${e.clientY-r.top}px`)}
 return <article className={`dd-spotlight ${className}`} onMouseMove={move} {...props}>{children}</article>
}
function BeforeAfterCard({ item, en }) {
 const [position,setPosition]=useState(50)
 return <article className="dd-compareCard">
  <div className="dd-compare" style={{'--split':`${position}%`}}>
   <img src={item.after} alt={en?'After treatment':'Después del tratamiento'}/>
   <div className="dd-beforeLayer"><img src={item.before} alt={en?'Before treatment':'Antes del tratamiento'}/></div>
   <span className="dd-beforeTag">{en?'Before':'Antes'}</span><span className="dd-afterTag">{en?'After':'Después'}</span>
   <span className="dd-handle" aria-hidden="true"><i>↔</i></span>
   <input aria-label={en?'Compare before and after':'Comparar antes y después'} type="range" min="0" max="100" value={position} onChange={e=>setPosition(e.target.value)}/>
  </div>
  <h3>{item.treatment}</h3><p>{item.detail}</p><a className="dd-caseLink" href={en?'/en/before-after/':'/antes-despues/'}>{en?'View clinical case':'Ver caso clínico'} <ArrowUpRight size={14}/></a>
 </article>
}

export default function Home() {
 const locale=useLocale(); const en=locale==='en'; const L=(x)=>x[en?'en':'es']
 const [openFaq,setOpenFaq]=useState(0)
 const pageRef=useRef(null)
 const leadDoctor={
  name:'Javier Pimienta',
  title:en?'Director · Dental Prosthetics Technician':'Director · Técnico en Prótesis Dental',
  photoUrl:'/Images/Equipo/javier-pimienta.webp',
 }
 useEffect(()=>{
  const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if(reduceMotion) return undefined
  gsap.registerPlugin(ScrollTrigger)
  const ctx=gsap.context(()=>{
   const hero=gsap.timeline({defaults:{ease:'power3.out'}})
   hero.from('.dd-hero .dd-eyebrow',{autoAlpha:0,y:18,duration:.55})
    .from('.dd-hero h1',{autoAlpha:0,y:46,duration:.85},'-.25')
    .from('.dd-heroCopy>p,.dd-rating',{autoAlpha:0,y:24,duration:.6,stagger:.1},'-.45')
    .from('.dd-pills span',{autoAlpha:0,y:14,duration:.45,stagger:.07},'-.35')
    .from('.dd-actions>a',{autoAlpha:0,y:16,duration:.45,stagger:.1},'-.25')
    .from('.dd-proofGrid>*',{autoAlpha:0,y:24,duration:.55,stagger:.08},'-.45')

   gsap.utils.toArray('.dd-section').forEach(section=>{
    const heading=section.querySelector('h2')
    const eyebrow=section.querySelector('.dd-eyebrow')
    if(eyebrow||heading) gsap.from([eyebrow,heading].filter(Boolean),{scrollTrigger:{trigger:section,start:'top 88%',once:true},y:38,duration:.75,stagger:.12,ease:'power3.out',clearProps:'transform'})
   })

   gsap.from('.dd-videoRail article',{scrollTrigger:{trigger:'.dd-videoRail',start:'top 82%',once:true},autoAlpha:0,y:45,rotateX:5,duration:.7,stagger:.1,ease:'power3.out'})
   gsap.from('.dd-doctor .dd-featureMedia',{scrollTrigger:{trigger:'.dd-doctor',start:'top 82%',once:true},autoAlpha:0,clipPath:'inset(100% 0 0 0 round 32px)',duration:1.05,ease:'power4.inOut'})
   gsap.from('.dd-treatmentGrid article',{scrollTrigger:{trigger:'.dd-treatmentGrid',start:'top 78%',once:true},autoAlpha:0,y:55,scale:.97,duration:.75,stagger:.12,ease:'power3.out'})
   gsap.from('.dd-caseGrid article',{scrollTrigger:{trigger:'.dd-caseGrid',start:'top 80%',once:true},autoAlpha:0,y:42,duration:.7,stagger:.12,ease:'power3.out'})
   gsap.from('.dd-steps article',{scrollTrigger:{trigger:'.dd-steps',start:'top 78%',once:true},autoAlpha:0,y:38,duration:.65,stagger:.1,ease:'power3.out'})
   gsap.from('.dd-teamGrid article',{scrollTrigger:{trigger:'.dd-teamGrid',start:'top 82%',once:true},autoAlpha:0,y:42,duration:.65,stagger:.09,ease:'power3.out'})
  },pageRef)
  return ()=>ctx.revert()
 },[])
 return <div className="dd-home" ref={pageRef}>
  <Helmet><title>{en?'Debod Dental Clinic Madrid — Specialist Dentistry':'Debod Dental Clinic Madrid — Odontología de Especialistas'}</title><meta name="description" content={en?'Specialist dental clinic in Argüelles, Madrid. Digital dentistry, in-house laboratory and personalised care.':'Clínica dental de especialistas en Argüelles, Madrid. Odontología digital, laboratorio propio y atención personalizada.'}/><meta property="og:type" content="website"/><meta property="og:title" content={en?'Debod Dental Clinic — Specialist Dentistry':'Debod Dental Clinic — Odontología de Especialistas'}/><meta property="og:description" content={en?'Specialist dental clinic in Argüelles, Madrid. Digital dentistry, in-house laboratory and personalised care.':'Clínica dental de especialistas en Argüelles, Madrid. Odontología digital, laboratorio propio y atención personalizada.'}/></Helmet>
  <JsonLd schema={{'@context':'https://schema.org','@type':'FAQPage',mainEntity:faqs.map(item=>({'@type':'Question',name:L(item.q),acceptedAnswer:{'@type':'Answer',text:L(item.a)}}))}}/>

  <section className="dd-hero">
   <video autoPlay muted loop playsInline preload="metadata" poster="/hero/hero-poster.jpg"><source src="/hero/hero-doctores.webm" type="video/webm"/></video><div className="dd-heroShade"/>
   <div className="dd-shell dd-heroGrid">
    <div className="dd-heroCopy"><Eyebrow>{en?'SPECIALIST DENTISTRY · ARGÜELLES · MADRID':'ODONTOLOGÍA ESPECIALIZADA · ARGÜELLES · MADRID'}</Eyebrow>
     <h1>{en?<>Dentistry that restores<br/><em>more than your smile.</em></>:<>Odontología que recupera<br/><em>mucho más que tu sonrisa.</em></>}</h1>
     <p>{en?'A multidisciplinary specialist team, advanced digital technology and our own dental laboratory — all in one clinic.':'Un equipo multidisciplinar de especialistas, tecnología digital avanzada y laboratorio dental propio, todo en una misma clínica.'}</p>
     <div className="dd-rating"><span>★★★★★</span><b>4.9</b> · {en?'Verified patient reviews':'Reseñas verificadas de pacientes'}</div>
     <div className="dd-pills">{benefits.map((b,i)=><span key={i}><Check size={13}/>{L(b)}</span>)}</div>
     <div className="dd-actions"><CTA>{en?'Book your diagnostic visit':'Reserva tu visita diagnóstica'}</CTA><CTA outline href="tel:+34914476225"><Phone size={15}/>{en?'Call the clinic':'Llamar a la clínica'}</CTA></div>
    </div>
    <div className="dd-proofGrid">
      <div><strong>15+</strong><span>{en?'Years of specialist experience':'Años de experiencia especializada'}</span></div><div><strong>4.9★</strong><span>{en?'Patient satisfaction':'Satisfacción de pacientes'}</span></div><div><strong>100%</strong><span>{en?'Digital planning':'Planificación digital'}</span></div><div><strong>1</strong><span>{en?'In-house dental lab':'Laboratorio dental propio'}</span></div>
      <article><span className="dd-monogram">D</span><p><b>Debod Dental Clinic</b><small>{en?'Multidisciplinary team · Argüelles, Madrid':'Equipo multidisciplinar · Argüelles, Madrid'}</small></p></article>
    </div>
   </div>
  </section>

  <FounderVideoSection en={en}/>

  <section className="dd-trust"><div className="dd-shell"><Eyebrow>{en?'TECHNOLOGY, SPECIALISTS & OWN LAB':'TECNOLOGÍA, ESPECIALISTAS Y LABORATORIO PROPIO'}</Eyebrow><div className="dd-logoLoop"><div>{[...tech,...tech].map((name,i)=><b aria-hidden={i>=tech.length} key={`${name}-${i}`}>{name}<span>✦</span></b>)}</div></div><p>{en?'Every case is planned collaboratively, with full control from diagnosis to final restoration.':'Cada caso se planifica en equipo, con control completo desde el diagnóstico hasta la restauración final.'}</p></div></section>

  <VideoTestimonialsSection en={en}/>

  <section className="dd-needs" aria-labelledby="needs-title"><div className="dd-shell"><Eyebrow>{en?'START WITH WHAT YOU NEED':'EMPIEZA POR LO QUE NECESITAS'}</Eyebrow><h2 id="needs-title">{en?'How can we help you?':'¿Qué necesitas recuperar?'}</h2><div className="dd-needGrid">{needs.map(item=>{let href=item.href;if(en&&item.href.startsWith('/tratamientos/'))href='/en/treatments/';if(en&&item.href.startsWith('/urgencias-'))href='/en/dental-emergency-madrid/';return <a key={item.icon} href={href}><span>{item.icon}</span><b>{L(item.label)}</b><ArrowUpRight size={18}/></a>})}</div></div></section>

  <section className="dd-section dd-treatments"><div className="dd-shell"><Eyebrow>{en?'SPECIALIST CARE':'TRATAMIENTOS ESPECIALIZADOS'}</Eyebrow><h2>{en?<>One clinic. <em>Every specialist you need.</em></>:<>Una clínica. <em>Todos los especialistas que necesitas.</em></>}</h2><div className="dd-treatmentGrid">{treatments.map(x=><SpotlightCard key={x.n}><img src={x.img} alt={L(x.title)}/><div><span>{x.n}</span><h3>{L(x.title)}</h3><p>{L(x.text)}</p><a href={en?'/en/treatments/':'/tratamientos/'}>{en?'Explore treatment':'Ver tratamiento'} <ArrowUpRight size={15}/></a></div></SpotlightCard>)}</div></div></section>

  <section className="dd-section dd-cases"><div className="dd-shell"><Eyebrow>{en?'REAL CLINICAL CASES':'CASOS CLÍNICOS REALES'}</Eyebrow><h2>{en?<>Results planned<br/><em>for real life.</em></>:<>Resultados pensados<br/><em>para la vida real.</em></>}</h2><div className="dd-caseGrid">{beforeAfterCases.slice(0,3).map(c=><BeforeAfterCard key={c.slug} item={c} en={en}/>)}</div><p className="dd-disclaimer">{en?'Individual results vary. Every treatment begins with a complete clinical diagnosis.':'Los resultados varían según cada caso. Todo tratamiento comienza con un diagnóstico clínico completo.'}</p></div></section>

  <section className="dd-section dd-method"><div className="dd-shell"><Eyebrow>{en?'HOW WE WORK':'CÓMO TRABAJAMOS'}</Eyebrow><h2>{en?'A clear process, from diagnosis to result.':'Un proceso claro, del diagnóstico al resultado.'}</h2><div className="dd-steps">{[
   t('Complete diagnosis','Diagnóstico completo'),t('Specialist planning','Planificación especializada'),t('Digital treatment','Tratamiento digital'),t('Laboratory control','Control de laboratorio'),t('Long-term follow-up','Seguimiento a largo plazo')
  ].map((x,i)=><article key={i}><span>0{i+1}</span><h3>{L(x)}</h3><p>{en?'Clear information, precise planning and personal follow-up at every step.':'Información clara, planificación precisa y seguimiento personal en cada etapa.'}</p></article>)}</div></div></section>

  <section className="dd-section dd-team"><div className="dd-shell"><Eyebrow>{en?'THE PEOPLE BEHIND YOUR CARE':'LAS PERSONAS DETRÁS DE TU TRATAMIENTO'}</Eyebrow><h2>{en?<>A team built around<br/><em>your whole case.</em></>:<>Un equipo alrededor<br/><em>de todo tu caso.</em></>}</h2><div className="dd-teamGrid">{teamMembers.slice(0,4).map(m=><article key={m.slug}><img src={m.photoUrl} alt={m.name}/><h3>{m.name}</h3><p>{m.title}</p></article>)}</div><div className="dd-teamCta"><a className="dd-cta dd-cta--outline" href={en?'/en/team/':'/equipo/'}>{en?'Meet the full team':'Conoce a todo el equipo'} <ArrowUpRight size={17}/></a></div></div></section>

  <section className="dd-section dd-location"><div className="dd-shell dd-split"><div><Eyebrow>{en?'ARGÜELLES · CENTRAL MADRID':'ARGÜELLES · CENTRO DE MADRID'}</Eyebrow><h2>{en?<>Advanced dentistry,<br/><em>close to you.</em></>:<>Odontología avanzada,<br/><em>cerca de ti.</em></>}</h2><p>{en?'A calm, modern clinic in central Madrid, designed for precise dentistry and comfortable visits.':'Una clínica moderna y tranquila en el centro de Madrid, diseñada para una odontología precisa y visitas cómodas.'}</p><p className="dd-address"><MapPin/> Calle de Ferraz · Argüelles, Madrid</p><CTA href={en?'/en/locations/':'/ubicaciones/'}>{en?'See location':'Ver ubicación'}</CTA></div><img className="dd-clinicImg" src="/Images/clinica/dsc00259.webp" alt="Debod Dental Clinic"/></div></section>

  <section className="dd-section dd-faq"><div className="dd-shell"><Eyebrow>{en?'FREQUENT QUESTIONS':'PREGUNTAS FRECUENTES'}</Eyebrow><TextReveal><h2>{en?'Everything you need to know.':'Todo lo que necesitas saber.'}</h2></TextReveal><div className="dd-faqList">{faqs.map((item,i)=><AccordionItem key={i} question={L(item.q)} open={openFaq===i} onToggle={()=>setOpenFaq(openFaq===i?-1:i)}><p>{L(item.a)}</p></AccordionItem>)}</div></div></section>

  <section className="dd-section dd-consult" id="consultation"><div className="dd-shell dd-consultGrid"><div><Eyebrow>{en?'YOUR FIRST STEP':'TU PRIMER PASO'}</Eyebrow><h2>{en?<>Your diagnosis and plan,<br/><em>clearly explained.</em></>:<>Tu diagnóstico y tu plan,<br/><em>explicados con claridad.</em></>}</h2><p>{en?'Tell us what you need. Our team will contact you to arrange the right specialist visit.':'Cuéntanos qué necesitas. Nuestro equipo te contactará para organizar la visita con el especialista adecuado.'}</p><ol><li><b>1. {en?'Tell us about your case':'Cuéntanos tu caso'}</b></li><li><b>2. {en?'We match you with the right specialist':'Te asignamos el especialista adecuado'}</b></li><li><b>3. {en?'Receive a clear diagnosis and plan':'Recibe un diagnóstico y un plan claros'}</b></li></ol></div><div className="dd-liveForm"><LeadForm servicio={en?'Diagnostic consultation':'Consulta diagnóstica'} locale={locale}/></div></div></section>
  <nav className="dd-mobileCta" aria-label={en?'Quick contact':'Contacto rápido'}><a href="tel:+34689104714"><Phone size={17}/>{en?'Call':'Llamar'}</a><a href="#consultation"><MessageCircle size={17}/>{en?'Book a visit':'Reservar cita'}</a></nav>
 </div>
}
