import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

import CodeBook from './codebook'

import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  trigger: {
    width: '90%',
    margin: '20px auto',
    padding: '10px',
  },
  content: {
    border: '0',
    padding: '15px',
    // padding: theme.spacing(2, 4, 3),
    margin: '15px',
  },
  appBar: {
    background: 'transparent',
    color: 'black',
    boxShadow: 'none',
  },
  button: {
    width: '90%',
    display: 'block',
    margin: '15px 5%',
    padding: '5px 5%',
    lineHeight: '1.5rem',
    position: 'relative',
    right: '0',
    border: '1px solid transparent',
    cursor: 'pointer',
    '&:hover': {
    border: '1px solid rgb(89, 167, 235)',
    }
  },
}));

export default function MoreInfo(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
    <Typography className={props.code ? classes.code : classes.button} variant="overline" size="small" onClick={handleOpen} >
        {props.text}
    </Typography>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Paper className={classes.content}>
            <VerticalTabs activalue={props.activalue } />
          </Paper>
        </Fade>
      </Modal>
    </div>
  );
}


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={6}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStylesTabs = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
  },
  tabs: {
    borderRight: '1px solid rgb(89, 167, 235)',
    '&$selected':{

    borderRight: '1px solid rgb(89, 167, 0)',
    }
  },
  info: {
    width: '50vw',
    height: '75vh',
    maxWidth: '50vw',
    maxHeight: '75vh',
    overflow: 'auto',
    '& > p': {
      padding: '10px 0'
    }
  },
  subtitle: {
    paddingBottom: '20px',
  },

}));

function VerticalTabs(props) {
  const classes = useStylesTabs();
  const [value, setValue] = React.useState(props.activalue);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
        indicatorColor='primary'
      >
        <Tab label="About FLPS" {...a11yProps(0)} />
        <Tab label="About WPA Project" {...a11yProps(1)} />
        <Tab label="Modes of Organization" {...a11yProps(2)} />
        <Tab label="Editing and Text Encoding" {...a11yProps(3)} />
        <Tab label="Acknowledgements" {...a11yProps(4)} />
        <Tab label="Press Survey Code Book" {...a11yProps(5)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <AboutPressSurvey classes={classes} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AboutWpaProject classes={classes} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Modes classes={classes} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Editing classes={classes} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Ack classes={classes} />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <CodeBook classes={classes} />
      </TabPanel>
    </div>
  );
}
const AboutPressSurvey = ({classes}) =>  <div className={classes.info}>
  <Typography variant="h4">
    About the Press Survey
  </Typography>
  <Typography >
    The Chicago Foreign Language Press Survey is a collection of translations of newspaper articles originally published in Chicago's ethnic press between the 1860s and the 1930s. The Chicago Public Library administered the project that created this collection in the 1930s with funding from the U.S. Federal Works Progress Administration. The Press Survey was one of many initiatives during the Great Depression that employed Americans to document and enrich national culture. Translators and editors organized nearly 50,000 articles from 22 ethnic groups according to a hierarchical subject scheme created for the project. In total, the Survey produced approximately 120,000 sheets of typescript. The paper sheets are now cared for in the Special Collections Research Center at the University of Chicago, and several institutions hold copies of the microfilm. The Library of the University of Illinois at Urbana Champaign digitized its microfilm copy and contributed the files to the Internet Archive. In 2009 the Newberry Library received a grant from the National Endowment for the Humanities to create a new digital transcription of the Survey.
  </Typography>
  <Typography >
    The 1930s project intended to offer English-speaking researchers and students access to primary materials on ethnicity and urban life in one of America's great polyglot cities during a formative span of its history. In subsequent decades the Survey has been invaluable to scholars and students of Chicago history, and it has been used effectively in high school and college classrooms. This digital collection is intended to provide broader and better organized access than has been possible with paper and microfilm. The Survey translations have considerable value for teaching and research in immigration studies, urban history, the history of popular culture, and many other fields. They can reward browsing for curiosity as well as targeted research.
  </Typography>
  </div>

const AboutWpaProject = ({classes}) =>  <div className={classes.info}>
  <Typography variant="h4">
    About the WPA Project
    </Typography>
    <Typography >
    The Foreign Language Press Survey began in the autumn of 1936 with funding under the Federal Works Progress Administration, a New Deal program that countered unemployment during the Great Depression by sponsoring a broad array of cultural programs. The Press Survey project hired translators who were assigned newspapers to review, looking for articles that would suit the project and match one or more subject codes. Editors would review the selections and translations, and could reject articles, request clarification, or make changes. Typists and proofreaders then took the article through several more cycles of revision to create a polished typescript.
  </Typography>
  <Typography >
    The WPA project editors thought carefully about how they wanted to organize the material, though their decisions are not what present-day readers might expect. Each article belongs to one of twenty-two ethnic or linguistic groups. Each was assigned a primary subject code, and sometimes additional secondary subject codes, using a hierarchical subject scheme. The articles were translated, edited, and typed on horizontal sheets of paper five by eight inches in size. Source, title, and date identify each article at the top of the sheet, along with the group and Roman numeral codes for subject classifications.
  </Typography>
  <Typography variant="h4">
    Where are the Newspapers?
  </Typography>
  <Typography >
    The 1930s project did not organize a collection of original-language newspapers. Translators conducted their research throughout the city in library collections, ethnic institutions, and the offices of then-existing ethnic newspapers. The Press Survey itself consists only of English-language typescript. In some cases original newspapers can be found in various libraries today, though in other cases the original paper may no longer be available. This project has not sought to identify where original papers might yet exist. Researchers interested in doing so may want to begin with Chronicling America or WorldCat.
  </Typography>
  </div>

const Modes = ({classes}) =>  <div className={classes.info}>
    <Typography variant="h4">
      Modes of Organization
    </Typography >
    <Typography >
      For seven decades the articles were organized in one singular order: by group, by primary subject code, and then in reverse chronological order. There were no indexes to provide access by date, source, or subject across groups. In fact, there was no practical way to determine the number of articles altogether, or in any particular category, although it was possible to estimate the amount of material for each ethnic group. The Newberry digitization project provides access to the articles primarily through the categories of the original editors. These are often not the categories that scholars, librarians, editors, or curators would use today, but they are constitutive of the collection, and are essential to understanding it and making good use of it.
    </Typography >
    <Typography variant="h5">
      Groups
    </Typography>
    <Typography >
      Twenty-two ethnic groups make up the Survey as we know it. The bulk of the work focused on ten groups: Czech, which 1930s editors called "Bohemian" for the purposes of categorization, Danish, German, Greek, Jewish, Lithuanian, Norwegian, Polish, Russian, and Swedish. Some groups include a relatively small number of articles, particularly Albanian, Serbian, Slovene, Chinese, and Filipino. The Slovene articles are not included in the current digital collection for reasons of availability of scanned images.
    </Typography >
    <Typography >
      The categories of the digital edition are those of the original Survey editors. They were willing to use their own judgment in applying their ethnic categorizations flexibly to accommodate linguistic, national, and religious identities, and they occasionally adapted their editing practices to adjust to the limitations of the categories they imposed. One of the most notable examples of this is the category of "Spanish," which described Spanish-language sources from communities based in the Americas rather than the nation of Spain. A majority of the articles in the Spanish section are qualified as "Mexican," though there are scattered instances of other secondary qualifications, such as "Costa Rican," "Columbian," "Cuban," and even "Brazilian." Similarly in the Serbian section there are a couple of articles qualified as "Montenegrin." The 1930s editors were neither consistent nor thorough in applying these secondary terms even according to their own understanding of them, and so the present digital edition does not include these terms in the interface for browsing.
    </Typography >
    <Typography variant="h5">
      Subject Codes
    </Typography>
    <Typography >
      The subject codes are fundamental to the organization of the Press Survey. The categories and terms are unique to the project, and were developed under the supervision of Bessie Louise Pierce, a historian at the University of Chicago who was conducting extensive newspaper research for what became her three-volume History of Chicago (1937-1957). The translators and editors who worked on the project in the 1930s consulted a manual that listed the codes and explained what they were intended to mean, and how they should guide the selection of articles for the Survey. The present digital resource includes a digital transcription of this manual, and subject codes listed at the end of each article include links to the relevant paragraphs in the code manual.
    </Typography >
    <Typography >
      The subject scheme is arranged hierarchically with five top-level groupings: I. Attitudes, II. Contributions and Activities, III. Assimilation, IV. Representative Individuals, and V. Miscellaneous Characteristics. The first few of these are elaborated in several layers of subcategories. Only the lowest levels of the hierarchy produced terms that were applied to individual articles. That is, the first code applied toa individual articles is I A 1 a, "Attitudes / Education / Secular / Elementary, Higher (High School and College)." Roman numeral I, "Attitudes," was not applied to single articles on its own. Roman numeral IV, "Representative Individuals," has no subcategories.
    </Typography >
    <Typography >
      WPA editors assigned each article to a primary ethnic group with a primary subject code, and this has been for decades the most fundamental mode of organization of the Survey articles. Editors in many cases assigned additional subject codes, apparently intending them to be indexed and cross-referenced. Sometimes the editors assigned secondary codes in the context of other groups than the primary group assigned to the article. There are examples of this among the Scandinavian groups in particular.
    </Typography >
    <Typography >
      In this digital edition, the filtering and browsing tools at the left show parenthetical counts of articles in each subject code within the constraints of other active filters. These counts reflect only primary subject code assignments. The full set of results returned, however, includes instances where any selected codes appear as secondary codes. The parenthetical counts at left thus offer an opportunity for some preliminary analysis of a set of results in the aggregate, while respecting the special status of the primary codes, without giving up the ability to find articles based on their secondary codes.
    </Typography >
    <Typography variant="h5">
      Sources
    </Typography>
    <Typography >
      The Foreign Language Press Survey is primarily a collection of translations of newspaper articles that were originally published in Chicago in languages other than English. Editors in the 1930s would assign a translator a particular set of newspapers to work through. Translators proposed articles for inclusion based on the selection standards of the project. The Survey did not translate every article in an issue. They might select just one, or none. They did not include complete runs of every newspaper, nor where they comprehensive in including the full range of papers published at any particular time. It is perhaps impossible to know from the Survey itself what they omitted, or why. Researchers looking for particular newspapers or particular events may be disappointed, and may need to be cautious on how they interpret what cannot be found, as well as what can be.
    </Typography >
    <Typography >
      On the other hand, Press Survey editors made their selections on the basis of a positive vision of what they hoped would be of use to future researchers. As a result, they included materials that go beyond the expected foreign-language newspaper sources. They transcribed articles from English-language papers that offered information on ethnic communities. They consulted books, sociological journals, scrapbooks, yearbooks, event programs, and publications and record books of ethnic societies of various kinds. They also occasionally transcribed correspondence of ethnic community leaders. Finally, they conducted interviews with individuals, and typed their notes in the same form as their newspaper transcriptions.
    </Typography >
    <Typography >
      The original Press Survey sheets were never organized by source, and so the editors never fully confronted the demands of standardizing styles and references. The current digital edition has sought to facilitate browsing by consolidating references to newspaper names, generally adopting the style used most frequently by the editors in the 1930s. A few new categories of source have been introduced in order to consolidate many of the non-newspaper sources. These appear in the source list in square brackets, and include association documents, correspondence, information attributed to Press Survey project staff, interviews, and what the original project itself termed "miscellaneous material," often manuscript records and ephemera relating to ethnic associations held in the private collections of community members.
    </Typography >
  </div>

const Editing = ({classes}) =>  <div className={classes.info}>
    <Typography variant="h4">
      Editing and Text Encoding
    </Typography>
    <Typography >
      The Newberry version of the Chicago Foreign Language Press Survey of nearly 50,000 articles transcribed in XML files conforming to a schema adopted through the guidelines of the Text Encoding Initiative (TEI). The Newberry worked with a digitization vendor, PanGeo Partners of Chicago, which created a base XML transcription for each article from digital images. Much effort went into capturing the structure of the metadata for each article so that the information could be extracted into a database later. The transcriptions record the Internet Archive image identifiers for each sheet, and observe page breaks and page numberings. Within the body of the text only paragraphs and simple table structures have been represented.
    </Typography>
    <Typography >
      After the initial transcription, an editing phase of the project checked the vendor's work and then looked at the articles in bulk to evaluate the work of the original WPA project. Although the 1930s editors and proofreaders took care to maintain a high degree of quality, some inconsistencies and errors inevitably made it through their review. The Newberry project transformed the vendor XML files into new expanded files, mapping key metadata fields into TEI header elements. Through a modified TEI schema suited to this phase of work, these fields could be further constrained, which made it possible to identify and correct typographical and other errors. In addition, this editing step put date values into a consistent format when possible, ensured that subject codes matched the project's list, and edited newspaper and source names to be more consistent. To the extent possible, we have made such corrections in the TEI header, while leaving errors and inconsistencies uncorrected in the body if they correctly transcribed errors in the original, rather than mistakes introduced during digitization.
    </Typography>
    <Typography >
      Where we have been unable as yet to transcribe part of a text, the gap element in the original XML identifies a missing span, which may range from a single letter to a full page. Tabular information is represented with elements for tables, rows, and cells.
    </Typography>
  </div>

const Ack = ({classes}) =>  <div className={classes.info}>
  <Typography variant="h4">
    Acknowledgments
  </Typography>
  <Typography >
    This site was originally published in 2012 and revised in 2021. The project was made possible by a grant from the National Endowment for the Humanities. Any views, findings, conclusions or recommendations expressed in this website do not necessarily represent those of the National Endowment for the Humanities.
  </Typography>
  <Typography >
    The Newberry Library's Scholl Center for American History and Culture provided a home for the project, with support of the Dr. Scholl Foundation. Douglas Knox served as project director through November 2011. Staff of the Chicago Metro History Education Center, particularly Lisa Oppenheim, were strong early advocates of this project, as was Toby Higbie when he led the Scholl Center. Glenn Humphreys of the Chicago Public Library and Alice Schreyer and Dan Meyer of the University of Chicago Special Collections Research Center provided early encouragement. Jennifer Fry contributed to planning during an internship.
  </Typography >
  <Typography >
    Lizabeth Cohen, Kathleen Neils Conzen, Alice Fahs, Donna Gabaccia, Daniel Greene, James Grossman, and Jan Reiff provided scholarly support for the project. James Grossman, Daniel Greene, and Hjordis Halvorson ensured the project had indispensable institutional support.
  </Typography >
  <Typography >
    The approach to markup makes relatively simple use of version P5 of the TEI Guidelines. This project benefited from the decades of experience of the TEI community in thinking about representational issues and workflows in digital projects concerned with the scholarly use of textual evidence. Julia Flanders and Syd Bauman of Brown University taught an advanced workshop in text encoding that was well timed to help the project, and Syd, Julia, and Laura Mandell helped especially to think through questions about how to model the subject codes and other metadata. Ed Fishwick helped identify and correct incomplete transcriptions with a careful eye. During a productive internship late in the project Dan Tracy contributed a TEI transcription of the original code book instructing the editors in the selection of material.
  </Typography >
  <Typography >
  Additional thanks are due to Michael Ang, Brodie Austin, James Burke, Chris Cantwell, Ginger Frere, Crystal Johnson, Betsy Kruger, Chris Lamberti, Josh Lupkin, Matt Rutherford, Jack Simpson, Cheryl Tunstill, Frank Valadez, and Angela Waarala.
  </Typography >
  <Typography >The Newberry’s Digital Initiatives and Services department developed the 2021 site revision. Nick White rebuilt the database &amp; interface. Data files are available for download at <a href="https://github.com/santheo/FLPS-data" target="_blank" rel="noopener noreferrer" >GitHub</a>.
  </Typography >
  <Typography >
  Contextual content on this site is made available under a Creative Commons Public Domain license. All data and images from the Foreign Language Press Survey are in the public domain with <a href="https://creativecommons.org/share-your-work/public-domain/cc0/" target="_blank" rel="noopener noreferrer">No Copyright</a> restrictions. 
  </Typography >
  <Typography > 
Questions or comments? Please <a href="https://www.newberry.org/contact-librarian" target="_blank" rel="noopener noreferrer">contact us</a>.
  </Typography >
</div>