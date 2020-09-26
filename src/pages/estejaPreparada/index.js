import React from 'react';
import './styles.css';
import MainTitle from '../../components/layoutPieces/mainTitle';
import TableauReport from 'react-tableau-report';


function KitFormacao() {
    return (
        <section className="section-esteja-preparada">
            <MainTitle value="Dados" />
            <div className="box-formacao">
            {/*<div class='tableauPlaceholder' id='viz1600716627487' style={{position: 'relative', width: 800}} style={{width: '800px'}}>
            <noscript><a href='#'><img alt=' ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;MN&#47;MNDEleicoes2020&#47;MND2020&#47;1_rss.png'  /></a></noscript><object class='tableauViz' ><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> 
            <param name='site_root' value='' /><param name='name' value='MNDEleicoes2020&#47;MND2020' />
            <param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;MN&#47;MNDEleicoes2020&#47;MND2020&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='pt' /><param name='filter' value='publish=yes' /></object></div>  
            <script type='text/javascript'></script>*/}
                <TableauReport url="http://public.tableau.com/views/RegionalSampleWorkbook/Storms" />
                {/*<Tableau />*/}
            </div>
        </section>
    );


};

export default KitFormacao