
import Pages from './components/Pages'

export default function home({data}){
    return(
    <div>
      <div className=" bg-pink-300">
        <Pages data={data}/>
      </div>
    </div>
    )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.MY_URL}/api/product/show`);
  const data = await res.json();
  return { props: { data } };
}
