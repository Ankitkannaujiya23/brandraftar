export async function POST(req){
  let b;try{b=await req.json()}catch{return Response.json({ok:false},{status:400})}
  if(b.company)return Response.json({ok:true}); // honeypot
  const clean=s=>String(s||"").slice(0,600);
  const lead={name:clean(b.name),phone:clean(b.phone),business:clean(b.business),service:clean(b.service),time:clean(b.time),message:clean(b.message),at:new Date().toISOString()};
  if(!lead.name||lead.phone.replace(/\D/g,"").length<8)return Response.json({ok:false},{status:422});
  const hook=process.env.LEAD_WEBHOOK_URL;
  try{if(hook)await fetch(hook,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(lead)});else console.log("LEAD",lead)}
  catch{return Response.json({ok:false},{status:502})}
  return Response.json({ok:true});
}
