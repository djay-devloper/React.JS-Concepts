import './App.css'

function App() {

  return (
    <>

    {/* This is to check if tailwind is implemented or not */}
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>



{/* This is a tailwind component. there are many readymade components available. */}
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="https://imgs.search.brave.com/DuChB71dFAX9hLKIu3Mo7UIg92e_CZKfxaIq4-MQKNg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMTU4/MzU4Mi9wZXhlbHMt/cGhvdG8tMTU4MzU4/Mi5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA" alt="Sunset in the mountains" />
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>


    </>
  )
}

export default App


