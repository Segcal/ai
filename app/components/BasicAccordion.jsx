import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function BasicAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            Whats the difference between AI...mode and ChatGPT?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            On AI...mode you control the inputs. We designed the system to work
            with your own data sources, answering questions based only on the
            information you provide. This ensures highly accurate and relevant
            answers. ChatGPT is trained on a general pool of information found
            across the internet. It’s excellent at covering a wide range of
            topics but can struggle when the conversation becomes more focused
            and specific.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/*  */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>What languages does AI...mode support?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            AI...mode supports over 95 languages including, but not limited to,
            English, Spanish, French, German, Portuguese, Italian, Dutch,
            Russian, Arabic, Chinese, Japanese, Korean, Hindi, Bengali, Urdu,
            Turkish, Polish, Swedish, Norwegian, Danish, Finnish, Hebrew, Thai,
            Vietnamese, Indonesian and Malayet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/*  */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            Can I trust AI...mode to give me accurate information?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes. We designed the system to work with your own data sources,
            answering questions based only on the information you provide. And
            it’ll let you know if it can’t find an answer. So if you trust the
            source documents, you can trust AI...mode’s response!
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/*  */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>How secure is my data when using AI...mode?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Data is stored in secure cloud storage and no information uploaded
            to our platform is utilized in any form to train machine learning
            models.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How do I get support if I have an issue? </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Email support@AI...mode.ai and we’ll get back to you within a day.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
