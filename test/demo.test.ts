import { bootstrapTemplate } from "./pretest";

test('Resource has tags', () => {
  const template = bootstrapTemplate()
   template.hasResourceProperties('AWS::SQS::Queue', {
     Tags: [
      { 
        Key: "Project",
        Value: "Github Project Demo"
      }
    ],
   });
});



