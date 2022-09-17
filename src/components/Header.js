import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className="header">
            <a class="logo" onClick={()=> navigate('/')}>CompanyLogo</a>
            <div class="header-right">
                <a className="active"
                    onClick={()=> navigate('/')}
                >List</a>
                <a
                    onClick={()=> navigate('/cart')}
                >Cart</a>
            </div>
        </div>
    )
}

export default Header;