import React from 'react'
import  './Main.css'

const Main = () => {
  const [products, setProducts] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() =>{
    const fetchData = async() =>{
      try {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos')
      const data = await response.json()
      setProducts(data)
    } 
      catch (error) {
        console.log(error, 'Ошибка')
      }
      
      setLoading(false)
    }

    fetchData()
  }, [])
  return (
    <div className="integrate">
            <div className="what-can-you">
            <div className="what-can-you__container _container-narrow">
              {loading && 'Загрузка...'}
                <h3 className="what-can-you__title">Трендові товари</h3>
                <div className="what-can-you__content"> 
                {products.slice(0,12).map( item =>(  
                    <div key={item.id} className="what-can-you__item">
                      <div className="what-can-you__img">
                        <img src={item.thumbnailUrl} alt="картинка" />
                      </div>
                      <div className="item-content">
                      <a className="what-can-you__link" href="">{item.id}</a>
                        <h4 className="what-can-you__item__text">{item.title}</h4>
                        
                      </div>
                    </div>
                    ))} 
                </div>
            </div>
        </div>
        </div>
  )
}

export default Main