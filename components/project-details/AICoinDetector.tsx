import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "@/lib/utils";

export default function AICoinDetector() {
  return (
    <div className="space-y-12">
      <Overview />
      <Introduction />
      <Rationale />
      <DataCollection />
      <ModelDevelopment />
      <TrainingAndEvaluation />
      <Deployment />
      <EthicalImplications />
    </div>
  );
}

function Overview() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-6">
      <div className="md:w-1/3">
        <Image
          src={withBasePath("/static/placeholders/ai.png")}
          alt="AI Coin Detector Screenshot"
          width={400}
          height={300}
          className="rounded shadow"
        />
      </div>
      <div className="md:w-2/3 space-y-2">
        <p>
          <strong>Overview:</strong> This AI Coin Detector was developed using Django
          and Google Teachable Machine (GTM) as a requirement for the
          <em> Introduction to AI</em> course.
        </p>
        <p>
          <strong>Collaborators:</strong> Kimberly Baylon, Jeric Aminola, Bridget
          Jose, Azlan Tomindug
        </p>
        <Link
          href="https://github.com/Seanneskie/AI-coin-detector-django"
          className="inline-block underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </Link>
      </div>
    </section>
  );
}

function Introduction() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Introduction</h2>
      <p>
        In the expanding field of artificial intelligence (AI), the creation of
        accessible, real-world applications demonstrates the rapid growth and
        incorporation of AI technology into our daily lives. The project
        presented herein uses Google&apos;s Teachable Machine (GTM), an innovative
        tool aimed at promoting machine learning skills, to create a web
        application that functions as a coin detector and counter. This program
        focuses on detecting and counting Philippine Peso coins in denominations
        of 1, 5, 10, and 20 Pesos, as well as the 25 centavo coin. Using
        GTM-facilitated image recognition technology, this project aims to
        provide a practical solution for quickly identifying and summing the
        total value of a collection of coins, thereby simplifying financial
        transactions and educational purposes related to currency recognition
        and management.
      </p>
      <strong>Statement of the Problem</strong>
      <p>
        The new series of Philippine peso coins are designed to be more
        identical to each other, which can be challenging for people with visual
        impairments to distinguish. An AI coin detection system can help these
        individuals by accurately identifying the value of coins through images
        or video samples, thereby enhancing their accessibility and convenience
        in daily transactions (Alon et al., 2021).
      </p>
      <strong>Significance</strong>
      <p>
        The significance of this project lies not only in its practical
        application but also in its educational value. It provides a realistic
        example of how machine learning algorithms may be taught and deployed to
        deal with specific, daily problems. The usage of Philippine Peso coins
        as the subject matter gives the project specific context, making it more
        relevant to users in the Philippines. Through this project, we aim to
        demonstrate Teachable Machine&apos;s potential for closing the gap between
        complex AI technologies and end-users, allowing individuals without
        significant technical understanding in AI to develop powerful, machine
        learning-based apps. This documentation will go over the whole
        development process, from concept to implementation, showcasing the
        creative approach and technology utilized to create an AI-powered tool
        that improves human connection with the digital world.
      </p>
    </section>
  );
}

function Rationale() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Rationale</h2>
      <p>
        The rationale behind developing a Philippine coin detection AI lies in
        its potential to improve efficiency, accuracy, accessibility, security,
        and innovation in various financial applications. In addition, It aims
        to solve the issue of time efficiency in coin counting by utilizing
        camera sensors while maintaining high accuracy. Moreover, a key use case
        in the industry involves integrating coin detection AI into self-service
        kiosks or vending machines.
      </p>
    </section>
  );
}

function DataCollection() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Data Collection and Preparation</h2>
      <strong>Data Collection</strong>
      <p>
        The dataset used for the AI coin detection system, specifically for the
        Philippine peso, consists of legal tender coins that are accepted as
        payment for goods and services. This dataset is composed of close-up
        photos of the coins, taken by the group, and includes both the front and
        back faces of each coin.
      </p>
      <p>
        The use of close-up photos is particularly important as it allows for
        detailed analysis of the coin&apos;s features, which are crucial for accurate
        detection and classification. This method is supported by research and
        development in the field of computer vision, where object detection
        models have been successfully applied to identify and track various coin
        types in real-time, even under challenging lighting conditions and
        diverse orientations (Detect &amp; Classify Coins Using Computer Vision,
        2023)
      </p>
      <p>
        The inclusion of both front and back faces of the coins in the dataset
        is a strategic decision that addresses a common challenge in coin
        detection systems. By training the model on images of both sides of the
        coins, the system can better recognize and classify coins regardless of
        their orientation. This is a critical aspect of the coin detection
        process, as coins can be presented in various orientations during
        transactions.
      </p>
      <p>Right below are the classification of the coins used as dataset:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>25-Cents Coin Photos</li>
        <li>1-Peso Coin Photos</li>
        <li>5-Peso Coin Photos</li>
        <li>10-Peso Coin Photos</li>
        <li>20-Peso Coin Photos</li>
      </ul>
      <strong>Training and Testing</strong>
      <p>
        The training set was composed of coins numbering at least a 100 of
        samples as long as it is possible for the group to collect. Moreover,
        the number of sample data is still varying due to the lack of resources.
        Nevertheless, it is made sure that the training set coin samples were
        not used in the testing set, the testing set was made sure to be
        composed of coins that are not in the testing set or were taken in a
        different angle or lighting. Lastly, after the testing, the testing set
        is also added to the training set.
      </p>
    </section>
  );
}

function ModelDevelopment() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Model Development</h2>
      <strong>Architecture and Setup</strong>
      <p>
        The setup used for training Teachable Model was the default setup of
        teachable model. The classes in the image model were 10 and will be
        discussed in Table 1. Model Classes. In addition, the setup will be
        displayed in Table 2. Model Setup.
      </p>
      <div className="overflow-x-auto">
        <p className="font-semibold">Table 1. Model Classes</p>
        <table className="table-auto border-collapse border border-gray-300 w-full text-sm">
          <thead>
            <tr>
              <th className="border border-gray-300 px-2 py-1 text-left">Class Name</th>
              <th className="border border-gray-300 px-2 py-1 text-left">Value (PHP)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-2 py-1">1 PESO - Front</td>
              <td className="border border-gray-300 px-2 py-1">1</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-2 py-1">1 PESO - Back</td>
              <td className="border border-gray-300 px-2 py-1">1</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-2 py-1">5 PESO - Front</td>
              <td className="border border-gray-300 px-2 py-1">5</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-2 py-1">5 PESO - Back</td>
              <td className="border border-gray-300 px-2 py-1">5</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-2 py-1">10 PESO - Front</td>
              <td className="border border-gray-300 px-2 py-1">10</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-2 py-1">10 PESO - Back</td>
              <td className="border border-gray-300 px-2 py-1">10</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-2 py-1">20 PESO - Front</td>
              <td className="border border-gray-300 px-2 py-1">20</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-2 py-1">20 PESO - Back</td>
              <td className="border border-gray-300 px-2 py-1">20</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-2 py-1">25 CENTS - Front</td>
              <td className="border border-gray-300 px-2 py-1">0.25</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-2 py-1">25 CENTS - Back</td>
              <td className="border border-gray-300 px-2 py-1">0.25</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        The setup for training for the model was default as tweaking the setup
        can be detrimental to the result of the model as small changes to
        numbers can impact the accuracy of the model. With that in mind, the
        group has decided to keep on default. In addition, By comparing the
        performance of more sophisticated models against the default model, it
        becomes possible to assess whether the efforts are truly improving the
        predictive power or just adding unnecessary complexity (How, 2024).
      </p>
      <div className="overflow-x-auto">
        <p className="font-semibold">Table 2. Model Setup</p>
        <table className="table-auto border-collapse border border-gray-300 w-full text-sm">
          <thead>
            <tr>
              <th className="border border-gray-300 px-2 py-1 text-left">Options</th>
              <th className="border border-gray-300 px-2 py-1 text-left">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-2 py-1">Epochs</td>
              <td className="border border-gray-300 px-2 py-1">80</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-2 py-1">Batch Size</td>
              <td className="border border-gray-300 px-2 py-1">16</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-2 py-1">Learning Rate</td>
              <td className="border border-gray-300 px-2 py-1">0.00102</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

function TrainingAndEvaluation() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Training and Evaluation</h2>
      <strong>Training Processes and Challenges</strong>
      <p>
        The training process started after the collection of the 50 sample sets
        of each coin in the model classes. In addition, the testing lasts for 3
        months and is still currently on-going. Amidst the testing, the group
        encountered challenges such as lack of resources for specific classes of
        coin such as the 20-Peso Coin, 10-Peso Coin and 25-centavos. In addition,
        there is a lot of sample data for 1-peso and 5-peso coin casting to
        split and adjust the sample data for these classes of coins.
      </p>
      <p>
        Another challenge is the low accuracy in the detection rate, the model
        seems to detect almost every silver coin or if the lighting is bright to
        be a 1-Peso coin with a very high confidence level ranging from 90-100%
        of confidence value. In addition, the factors that seemed to affect the
        accuracy were the large amount of sample which was then splitted, the
        lighting of the image, and the AI seems to detect the silver-colored
        coins as 1-Peso Coin.
      </p>
      <p>
        To address the challenges with low accuracy in detecting silver coins as
        1-Peso coins, especially in bright lighting conditions, consider
        capturing close-up shots of the coins with a clear background. This
        approach can help the model focus on the specific features of each coin,
        potentially improving its ability to differentiate between different
        types of coins. Additionally, ensure that the lighting conditions are
        consistent across all images to reduce the impact of lighting on the
        model&apos;s performance.
      </p>
      <strong>Evaluation</strong>
      <p>
        For testing the model, we used past data of the first model test to
        compare to the current model testing but only by remembering what were
        the challenges and problems. If the problem is solved it will be
        checked. Nevertheless, this causes confusion in the long term and the
        group has decided to use test plans to record the results which are
        displayed in Appendix A, Test Plans.
      </p>
      <p>
        In these test plans, the group used sample data and counted how many the
        model can detect correctly with a confidence level of at least 60 or 70%.
        If the model couldn’t reach 60%, it will be counted as a failure. In
        addition, the confidence level and also the decision if pass or fail is
        included in Appendix A. Test Plans.
      </p>
      <p>
        The group didn’t use any baseline or benchmark model from the internet
        but nonetheless used the previous model as the benchmark model for
        improving the current performance of the model.
      </p>
    </section>
  );
}

function Deployment() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Deployment and Uses Case</h2>
      <strong>Real World Deployment</strong>
      <p>
        The &quot;Philippine Peso Coin Detector and Counter&quot; AI application has a
        potential for creation into a variety of real-world settings to improve
        currency handling operations. For example, banks and financial
        organizations can use this technology in their branches or self-service
        coin counting devices to improve customer experience and ensure precise
        and efficient coin processing during deposits. Furthermore, in vending
        machines, the detector and counter can prevent fraud and assure correct
        crediting by properly counting and confirming coins, which benefits both
        operators and users by making transactions more convenient (Steinberg et
        al., 2021).
      </p>
      <p>
        Furthermore, the incorporation of this technology can help government
        agencies, nonprofit organizations, and large retailers enhance their
        cash management procedures, saving time, lowering expenses, and
        improving overall operational efficiency. Overall, the use of the
        &quot;Philippine Peso Coin Detector and Counter&quot; AI application in these
        real-world scenarios has the potential to transform coin handling
        procedures, providing benefits in terms of speed, accuracy, and
        cost-effectiveness (Humanness in the Age of AI, 2023).
      </p>
      <h3 className="text-xl font-semibold">Potential Use Case or Application for the developed AI application</h3>
      <p>
        The development of an AI-powered Philippine peso coin detection and
        counter marks an important advancement in automated financial
        instruments. This program uses machine learning technology to reliably
        detect and count coins in various denominations, including 1, 5, 10, and
        20 pesos, as well as 25 centavos. Such skills may be used across
        numerous industries to improve efficiency, accuracy, and ease in
        financial transactions and management.
      </p>
      <strong>Retail and Consumer Services</strong>
      <p>
        The incorporation of an AI-based coin detector in retail environments,
        particularly in high-volume settings such as supermarkets, convenience
        shops, and vending machines, can help to simplify the cash transaction
        processing. It can cut down on the amount of time customers spend at
        checkout counters while also improving cash handling accuracy by
        reducing human mistakes in issuing change and counting daily receipts.
      </p>
      <p>
        This technology leverages artificial intelligence and computer vision to
        automate the checkout process, eliminating the need for traditional
        cashiers and providing a seamless shopping experience for customers.
        Moreover, AI vision checkout technology can automatically detect items
        through visual recognition, calculate the total cost, and process
        payments without manual scanning or waiting in line, thereby reducing
        wait times and improving overall efficiency (admin, 2024).
      </p>
      <strong>Banking and Financial Institutions</strong>
      <p>
        Banks and other financial organizations can use this technology to
        increase the efficiency of coin counting services they provide to
        consumers. This is especially useful in branches where firms or
        individuals make frequent coin deposits. The AI program guarantees that
        coins are counted quickly and precisely, which improves customer service
        and operational efficiency.
      </p>
      <p>
        Moreover, AI in banking has been revolutionary, automating processes,
        improving customer experience, mitigating risks, boosting efficiency,
        and transforming overall operations (AI’s Role in Banking: Benefits and
        Risks, 2023). In addition, The operational efficiency gained through AI
        is crucial, as it allows for the automation of routine tasks such as
        data entry, account reconciliation, and document processing, leading to
        cost savings and greater operational efficiency
      </p>
      <strong>Charitable Organizations</strong>
      <p>
        Charitable groups that collect coins can use this AI application to
        better efficiently count and categorize donations. By automating the
        counting process, these organizations may devote more resources to their
        main goal and activities, increasing the impact of the contributions
        they receive.
      </p>
      <p>
        Furthermore, the AI-powered Philippine peso coin detector and counter
        has a wide range of applications that can help industries with a high
        volume of coin transactions. By implementing this technology, businesses
        may increase operational efficiency, financial transaction accuracy, and
        customer happiness. As we continue to embrace digital advancements in
        numerous aspects of business and society, tools like this AI application
        highlight the power of innovative technology to improve everyday
        operations and services (Dorota Jasińska, 2024).
      </p>
    </section>
  );
}

function EthicalImplications() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Ethical and Societal Implications</h2>
      <p>
        It&apos;s important to understand the implications of artificial intelligence
        in terms of ethics and society at large, in addition to its application
        in innovations pertaining to daily life. Accuracy and reliability,
        security threats, employment displacement, and a decrease in errors and
        frauds.
      </p>
      <strong>Reliability and Accuracy</strong>
      <p>
        Regarding the accuracy and reliability of the AI model as it is being
        developed, there is a chance that improper training, inaccurate
        datasets, or poorly calibrated datasets could lead to unreliable
        results, causing errors in coin detection that could impact user trust
        and result in financial losses. Additionally, security risks associated
        with manipulable dataset collection, such as identifying false or
        mimicked coins as legitimate, pose threats of financial losses or
        security breaches.
      </p>
      <p>
        In an article by Baker (2023), he stated that “The development and
        deployment of AI models, including those for coin detection, face
        significant challenges related to accuracy, reliability, and security.
        Improper training, inaccurate datasets, or poorly calibrated datasets
        can lead to unreliable results, potentially causing errors in coin
        detection that could impact user trust and result in financial losses.”
      </p>
      <strong>Job Displacement</strong>
      <p>
        One additional aspect to take into account regarding the possible
        ethical and societal implications is the possibility of job
        displacement. Specifically, the automation of coin detection tasks via
        AI technology may result in the loss of employment for those involved in
        manual coin counting and sorting, which could potentially worsen
        inequality in society.
      </p>
      <p>
        Moreover, the adoption of AI in various sectors, including hiring,
        presents both challenges and opportunities. While AI can increase
        efficiency and reduce costs associated with HR, it also poses the risk
        of job displacement. This is particularly relevant in the context of
        coin detection, where automation could lead to the loss of jobs in
        manual coin counting and sorting. The transition to AI-driven systems
        could require workers to acquire new skills or adapt to different roles,
        potentially worsening inequality if not managed carefully (The White
        House, 2022).
      </p>
      <strong>Banking and Financial Institutions</strong>
      <p>
        Banks and other financial organizations can use this technology to
        increase the efficiency of coin counting services they provide to
        consumers. This is especially useful in branches where firms or
        individuals make frequent coin deposits. The AI program guarantees that
        coins are counted quickly and precisely, which improves customer service
        and operational efficiency.
      </p>
      <p>
        Moreover, AI in banking has been revolutionary, automating processes,
        improving customer experience, mitigating risks, boosting efficiency,
        and transforming overall operations (AI’s Role in Banking: Benefits and
        Risks, 2023). In addition, The operational efficiency gained through AI
        is crucial, as it allows for the automation of routine tasks such as
        data entry, account reconciliation, and document processing, leading to
        cost savings and greater operational efficiency
      </p>
      <strong>Charitable Organizations</strong>
      <p>
        Charitable groups that collect coins can use this AI application to
        better efficiently count and categorize donations. By automating the
        counting process, these organizations may devote more resources to their
        main goal and activities, increasing the impact of the contributions
        they receive.
      </p>
      <p>
        Furthermore, the AI-powered Philippine peso coin detector and counter
        has a wide range of applications that can help industries with a high
        volume of coin transactions. By implementing this technology, businesses
        may increase operational efficiency, financial transaction accuracy, and
        customer happiness. As we continue to embrace digital advancements in
        numerous aspects of business and society, tools like this AI application
        highlight the power of innovative technology to improve everyday
        operations and services (Dorota Jasińska, 2024).
      </p>
    </section>
  );
}

