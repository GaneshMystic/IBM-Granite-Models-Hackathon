from ollama import Client
from pydantic import BaseModel
import json

class Country(BaseModel):
  question: str


client = Client(
  host='https://blue-pens-swim.loca.lt',
)
response = client.chat(
  messages=[
    {
      'role': 'system',
      'content': 'You are given a JSON object schema for collecting user details during the onboarding process of an employee in a company. Based on the provided schema, generate a natural language question that will help the user understand the details required and encourage them to provide the necessary information.\n\nOutput should be in the following JSON format: { "question": "" }',
    },
    {
      'role': 'user',
      'content': json.dumps({ "label": "PAN", "type": "string", "name": "PAN Card Number", "required": True }),
    }
  ],
  model='granite3.1-dense',
  format=Country.model_json_schema(),
)

country = Country.model_validate_json(response["message"]["content"])
print(country.question)


