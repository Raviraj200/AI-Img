import React, { useEffect, useState } from 'react'
import Header from './Header/Header';
import FormFiled from '../components/FormField';
import Card from '../components/Card';
import Loader from '../components/Loader';
import { Link } from 'react-router-dom';


const RenderCards = ({ data, title }) => {
    if (data?.length > 0) {
        return (data.map((post) => <Card key={post._id} {...post} />)
        );
    }
    return (
        <h2 className=' mt-5 font-bold text-[#6449ff] text-xl uppercase'>{title}</h2>
    )
}
function Home() {

    const [loading, setLoading] = useState(false);
    const [allPosts, setAllPosts] = useState(null);
    const [searchText, setSearchText] = useState('');
    const [searchedResults, setSearchedResults] = useState(null);
    const [searchTimeout, setSearchTimeout] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);

            try {
                const response = await fetch('http://localhost:3002/api/v1/post', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',

                    },
                })
                if (response.ok) {
                    const result = await response.json();

                    setAllPosts(result.data.reverse())
                }
            } catch (error) {
                alert(error)

            } finally {
                setLoading(false)
            }
        }
        fetchPosts();

    }, []);
    const handleSearchChange = (e) => {
        clearTimeout(searchTimeout);
        setSearchText(e.target.value);
        setSearchTimeout(
            setTimeout(() => {
                const searchResults = allPosts.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()) || item.prompt.toLowerCase().includes(searchText.toLowerCase()));

                setSearchedResults(searchResults);

            }, 500)
        );
    }
    return (
        <section className='  max-w-7xl mx-auto h-auto'>
            <Header />

            <hr />


            {/* text******************************************************* */}
            <div>
                <section className="text-gray-600 body-font ">
                    <div className="container px-5 py-2 mx-auto">
                        <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">


                            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6" />
                            {/* <h1 className="text-2xl font-medium title-font mb-4 text-gray-900" id='home'>Home</h1> */}

                            <p className="text-gray-500">Certainly! I can help you generate an  <span className=' text-black'> AI Image</span>  using text-based instructions. Please provide me with Link detailed description of the image you have in mind, and I will do my best to create it for you.</p>

                        </div>

                    </div>
                </section>

            </div>
                            {/* <Link className=" w-full mx-auto text-white   rounded-full py-2 bg-black" to="/create-post">AI Images Generation</Link> */}
            <div className='mt-16  '>
                <FormFiled labelName="Seach Posts " type="text" name="text" placeholder="Search Posts" value={searchText} handleChange={handleSearchChange} />
            </div>

            <div className='mt-10'>
                {loading ? (
                    <div className=' flex justify-center items-center'><Loader /></div>
                ) : (
                    <>
                        {searchText && (
                            <h2 className='font-medium text-[#666e75] text-xl mb-3'> Showing Results for <span className='text-[#222328]'>{searchText}</span></h2>
                        )}
                        <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3'>
                            {searchText ? (
                                <RenderCards
                                    data={searchedResults}
                                    title="No Search Results Found" />
                            ) : (
                                <RenderCards data={allPosts} title="NO posts Found"
                                />
                            )}
                        </div>
                    </>
                )}
            </div>

        </section>
    )
}

export default Home