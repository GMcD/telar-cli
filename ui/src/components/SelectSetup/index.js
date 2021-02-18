import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import actions from '../../store/actions'
import services from '../../services';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(3),
    },
    cardActions: {
        justifyContent: "flex-end"
    }
}));

export default function SelectSetup() {
  const dispatch = useDispatch()
  const classes = useStyles();
    const [value, setValue] = React.useState('ofc');

    const handleChange = event => {
        
        setValue(event.target.value);
    };

    const handleNext = event => {
        services.dispatchServer(actions.startStep())
       dispatch(actions.setSetupState('progress'))
    };

    const handleVote = event => {
        event.preventDefault()
       services.openURL('https://github.com/Qolzam/feedback/issues/1')
    };

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="https://image.slidesharecdn.com/2019-01-openfaas-when-functions-collide-docks-amsterdam-190128104130/95/docker-and-serverless-randstad-jan-2019-openfaas-serverless-when-functions-and-gitops-collide-47-638.jpg?cb=1548672210"
                    title="Contemplative Reptile"
                />
            </CardActionArea>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    OpenFaaS
          </Typography>
                <Typography variant="body2" color="textSecondary" >
                    The <a href="https://www.openfaas.com/" target="_blank">OpenFaaS</a> makes it simple to deploy both functions and existing code on Kubernetes.
          </Typography>
          <br/>

                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Choose your setup</FormLabel>
                    <RadioGroup aria-label="setup-select" name="setup-select" value={value} onChange={handleChange}>
                        <FormControlLabel value="ofc" control={<Radio />} label="OpenFaaS" />
                        <FormControlLabel disabled value="eks" control={<Radio />} label="AWS EKS" />
                        <FormControlLabel disabled value="gke" control={<Radio />} label="Google Kubernetes Engine" />
                        <FormControlLabel disabled value="aks" control={<Radio />} label="Azure Kubernetes Service" />
                        <FormControlLabel disabled value="local" control={<Radio />} label="Self-host OpenFaaS" />
                        <FormControlLabel disabled value="local" control={<Radio />} label="Kubernetes on Bare-metal" />
                        <FormControlLabel disabled value="local" control={<Radio />} label="K3S on Bare-meta" />
                        <FormControlLabel disabled value="local" control={<Radio />} label="Local Kind" />
                        <FormControlLabel disabled value="local" control={<Radio />} label="Local Minikube" />
                    </RadioGroup>
                </FormControl>
                <br/>
                <br/>
                <Typography variant="body2" color="textSecondary" component="p">
                           Vote for your favorite option to enable for the next version. <a href="#" onClick={handleVote}>Click here to vote</a>
                  </Typography>
        
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button onClick={handleNext} size="small" color="primary">
                    Next
      </Button>
            </CardActions>
        </Card>
    );
}