const getSearchParams=(param)=>{
  let params = (new URL(document.location)).searchParams;
  
  return params.get(param);
}

export default getSearchParams;