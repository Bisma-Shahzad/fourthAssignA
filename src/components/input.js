import 'bootstrap/dist/css/bootstrap.min.css';
import { Box } from '@mui/system';

function Input(props) {
    return <Box>
        <input
            style={{
                backgroundColor: "white",
                border: '1px solid cadetblue',
                borderRadius: "5px",
                padding: 5,
                margin: 3,
                boxShadow: "0px 8px 12px rgba(0,0,0,.2)",
                width: '100%'
            }}
            placeholder={props.label}
            value={props.value}
            onChange={props.onChange}
            
        />
    </Box>
}

export default Input