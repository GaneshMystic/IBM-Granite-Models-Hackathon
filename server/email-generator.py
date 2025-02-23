import requests
import csv
import json


def generate_onboarding_email(
    candidate_name,
    company_name,
    applied_position,
    selection_status,
    decision_reason,
    access_token,
):
    """
    Generates an onboarding email for a candidate based on their selection status.

    Parameters:
        candidate_name (str): The name of the candidate.
        company_name (str): The name of the company.
        applied_position (str): The position the candidate applied for.
        selection_status (str): Either "Selected" or "Not Selected".
        decision_reason (str): Reason for the selection or rejection.
        access_token (str): The authentication token for the API.

    Returns:
        str: The generated email content.
    """

    url = "https://us-south.ml.cloud.ibm.com/ml/v1/text/generation?version=2023-05-29"

    body = {
        "input": f"""Generate an email for a candidate regarding their application at {company_name} for the position of {applied_position} by using the given details.
    If the candidate is selected:
        * Provide a warm welcome to {company_name}.
        * Inform them that an offer letter is attached.
    If the candidate is not selected:
        * Provide a polite message thanking them for their interest.
        * Include a brief explanation for the decision.
        * Encourage them to apply again in the future if appropriate.

Details Candidate Name: Rico
Selection Status: Not Selected
Reason: Need more technical knowledge
Position: Full stack developer
Email Rico, your application for the position of Full stack developer was not selected. We need to see some more technical knowledge by you. You are welcome to come back and try after a few months. Thank You.

Candidate Name: Rico
Selection Status: Not Selected
Reason: Attitude
Position: Designer
Email Rico, your application for the position of Designer was not selected. We need to see some more technical knowledge by you. It is a great company, and you are welcome to back after a few months. Thank You. Regards, Blizzard AI

Candidate Name: Sam
Selection Status: Selected
Reason: Null
Position: Manager
Email Sam, your application for the position of Manager has been selected. I'\''ll be in touch shortly. Regards, Blizzard AI Ltd.

Candidate Name: {candidate_name}
Selection Status: {selection_status}
Reason: {decision_reason}
Position: {applied_position}
Email""",
        "parameters": {
            "decoding_method": "sample",
            "max_new_tokens": 200,
            "min_new_tokens": 50,
            "random_seed": 111,
            "temperature": 0.8,
            "top_k": 50,
            "top_p": 1,
            "repetition_penalty": 2,
        },
        "model_id": "google/flan-t5-xxl",
        "project_id": "37edc0e6-4917-4f07-b1ad-48736cf007c0",
    }

    headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": f"Bearer {access_token}",
    }

    response = requests.post(url, headers=headers, json=body)

    if response.status_code != 200:
        raise Exception("Non-200 response: " + str(response.text))

    data = response.json()

    return data.get("results", [{}])[0].get("generated_text")


def handle_csv(file_path, access_token, output_file):
    results = []
    try:
        with open(file_path, mode="r", encoding="utf-8") as file:
            reader = csv.DictReader(file)

            for row in reader:
                candidate_name = row.get("candidate_name")
                company_name = row.get("company_name")
                applied_position = row.get("applied_position")
                selection_status = row.get("selection_status")
                decision_reason = row.get("decision_reason")

                email_content = generate_onboarding_email(
                    candidate_name=candidate_name,
                    company_name=company_name,
                    applied_position=applied_position,
                    selection_status=selection_status,
                    decision_reason=decision_reason,
                    access_token=access_token,
                )

                results.append(
                    {"candidate_name": candidate_name, "email_content": email_content}
                )

                print(
                    f"Generated email for {candidate_name}:\n{email_content}\n{'-'*50}\n"
                )

        with open(output_file, mode="w", encoding="utf-8") as json_file:
            json.dump(results, json_file, indent=4)
        print(f"Generated emails saved to {output_file}.")

    except FileNotFoundError:
        print(f"File {file_path} not found.")
    except Exception as e:
        print(f"An error occurred: {str(e)}")
