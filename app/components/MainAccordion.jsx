import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function MainAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>What are credits on Unriddle?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Credits are how we measure AI use. It costs one credit to create a
            note, upload a PDF or send a message.
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
          <Typography>What happens if I hit my credit limit?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We’ll politely suggest an upgrade and you won’t be able to use
            Unriddle until your limit resets at the start of the next calendar
            month.
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
          <Typography>What’s your refund policy?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We offer a 7-day grace period from the date of your first payment.
            Email support@unriddle.ai to request a refund and we’ll process it
            within a day.
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
            Whats the difference between Unriddle and ChatGPT?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            On Unriddle you control the inputs. We designed the system to work
            with your own data sources, answering questions based only on the
            information you provide. This ensures highly accurate and relevant
            answers. ChatGPT is trained on a general pool of information found
            across the internet. Its excellent at covering a wide range of
            topics but can struggle when the conversation becomes more focused
            and specific.
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
            Email support@unriddle.ai and we’ll get back to you within a day.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>What languages does Unriddle support?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Unriddle supports over 95 languages including, but not limited to,
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
            Can I trust Unriddle to give me accurate information?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes. We designed the system to work with your own data sources,
            answering questions based only on the information you provide. And
            it’ll let you know if it can’t find an answer. So if you trust the
            source documents, you can trust Unriddle’s response!
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
          <Typography>How secure is my data when using Unriddle?</Typography>
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
          <Typography>What payment methods do you accept?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We use Stripe, which accepts credit and debit card payments.
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
          <Typography>How secure is my data when using Unriddle?</Typography>
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
          <Typography>Can I cancel my subscription?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, you can cancel your subscription anytime and there’s no
            cancellation fee. To do so, head to the Settings sidebar by clicking
            on the cog icon in the top right corner of the screen. Select
            “Manage billing,” and you’ll see options to downgrade, upgrade and
            cancel.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
