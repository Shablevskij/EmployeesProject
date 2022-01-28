import './app-info.css';


const AppInfo = ({increased, employees}) =>{
    return(
        <div className="app-info">

        <h1>Перелік робітників </h1>
        <h2>Загальна кількість робітників:{' ' + employees}</h2>
        <h2>Премію отримають:{' ' + increased}</h2>

        </div>
        
    )

}

export default AppInfo;